import sharp from 'sharp';

export async function avc(src: string): Promise<string | undefined> {
  try {
    const { data } = await sharp(src)
      .resize(1, 1)
      .toBuffer({ resolveWithObject: true });
    return `rgb(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`;
  } catch (error) {
    return undefined;
  }
}
