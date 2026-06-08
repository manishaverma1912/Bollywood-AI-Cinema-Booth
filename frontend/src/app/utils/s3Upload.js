import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  },
});

export const uploadToS3 = async (fileBlob) => {
  const fileName = `ai-selfie-${Date.now()}.jpg`;

  // 🔥 Convert Blob → ArrayBuffer → Uint8Array
  const arrayBuffer = await fileBlob.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: import.meta.env.VITE_S3_BUCKET,
    Key: fileName,
    Body: uint8Array,
    ContentType: "image/jpeg",
  });

  await s3.send(command);

  return `https://${import.meta.env.VITE_S3_BUCKET}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${fileName}`;
};
