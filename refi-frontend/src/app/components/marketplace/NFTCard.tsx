import Image from 'next/image';
import { FC } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  previousPrice?: number;
  collection: string;
  seller: string;
  volume24h?: number;
  floorPrice?: number;
}

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: FC<NFTCardProps> = ({ nft }) => {
  const priceChange = nft.previousPrice ? ((nft.price - nft.previousPrice) / nft.previousPrice) * 100 : 0;
  
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black/40 p-4 transition-all hover:bg-black/60 border border-gray-800">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={nft.image}
          alt={nft.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white truncate">{nft.name}</h3>
          <div className="flex items-center gap-1">
            {priceChange > 0 ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm ${priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(priceChange).toFixed(2)}%
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-400">{nft.collection}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Price</p>
            <p className="text-lg font-semibold text-white">{nft.price} SOL</p>
          </div>
          <button className="rounded-lg bg-blue-600/80 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600">
            Buy Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-800">
          <div>
            <p className="text-xs text-gray-400">Floor Price</p>
            <p className="text-sm font-medium text-white">{nft.floorPrice} SOL</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">24h Volume</p>
            <p className="text-sm font-medium text-white">{nft.volume24h} SOL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard; 