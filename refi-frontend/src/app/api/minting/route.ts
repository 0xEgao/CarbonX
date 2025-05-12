import { NextRequest, NextResponse } from 'next/server';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  createGenericFile,
  createSignerFromKeypair,
  signerIdentity,
  generateSigner,
  percentAmount,
} from '@metaplex-foundation/umi';
import { irysUploader } from '@metaplex-foundation/umi-uploader-irys';
import { createProgrammableNft, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import base58 from 'bs58'; // Ensure wallet.json is placed in the same directory

// Initialize UMI with Solana devnet
const RPC_ENDPOINT = 'https://api.devnet.solana.com';
const umi = createUmi(RPC_ENDPOINT);

// Set up signer from wallet
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

// Configure UMI with Irys uploader and token metadata
umi.use(irysUploader());
umi.use(signerIdentity(signer));
umi.use(mplTokenMetadata());

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const {
      name,
      symbol,
      description,
      image,
      attributes,
      sellerFeeBasisPoints = 80, // Default to 80% if not provided
    } = await req.json();

    // Validate required fields
    if (!name || !symbol || !image) {
      return NextResponse.json(
        { error: 'Missing required fields: name, symbol, and image are required' },
        { status: 400 }
      );
    }

    // Prepare metadata JSON
    const metadata = {
      name,
      symbol,
      description: description || '',
      image,
      attributes: attributes || [],
      properties: {
        files: [
          {
            type: 'image/png',
            uri: image,
          },
        ],
      },
    };

    // Convert metadata to generic file
    const metadataJson = JSON.stringify(metadata);
    const genericFile = createGenericFile(metadataJson, 'metadata.json', {
      contentType: 'application/json',
    });

    // Upload metadata to Irys
    const [metadataUri] = await umi.uploader.upload([genericFile]);
    console.log('Metadata URI:', metadataUri);

    // Generate mint address
    const mint = generateSigner(umi);

    // Create and mint programmable NFT
    const tx = await createProgrammableNft(umi, {
      mint,
      sellerFeeBasisPoints: percentAmount(sellerFeeBasisPoints),
      name,
      symbol,
      uri: metadataUri,
    });

    // Send and confirm transaction
    const result = await tx.sendAndConfirm(umi);
    const signature = base58.encode(result.signature);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'NFT minted successfully!',
      transaction: `https://explorer.solana.com/tx/${signature}?cluster=devnet`,
      mintAddress: mint.publicKey,
      metadataUri,
    });
  } catch (error: any) {
    console.error('Error in NFT minting:', error);
    return NextResponse.json(
      { error: 'Failed to mint NFT', details: error.message },
      { status: 500 }
    );
  }
}