import { NextRequest, NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import path from 'path';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
    const uploadDir = path.join(process.cwd(), 'public/uploads');

  // Ensure directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
    multiples: false,
  });

  const parseForm = (): Promise<{ fields: any; files: any }> => {
    return new Promise((resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });
  };

  try {
    const { files } = await parseForm();
    const file : any = Array.isArray(files.image) ? files.image[0] : files.image;
    const fileUrl = `/uploads/${path.basename(file.filepath)}`;

    return NextResponse.json({ url: fileUrl });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
