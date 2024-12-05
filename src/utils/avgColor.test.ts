import { describe, it, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { avc } from './avgColor.js';
import sharp from 'sharp';

vi.mock('sharp');

describe('avc', () => {
  it('should return the average color of the image', async () => {
    const mockData = Buffer.from([255, 0, 0, 255]);
    (sharp as unknown as Mock).mockReturnValue({
      resize: vi.fn().mockReturnThis(),
      toBuffer: vi.fn().mockResolvedValue({ data: mockData }),
    });

    const result = await avc('./testImage.png');
    expect(result).toBe('rgb(255, 0, 0, 255)');
  });

  it('should handle errors', async () => {
    (sharp as unknown as Mock).mockImplementation(() => {
      return {
        resize: vi.fn().mockReturnThis(),
        toBuffer: vi
          .fn()
          .mockRejectedValue(new Error('Error processing the image')),
      };
    });

    const result = await avc('./testImage.png');
    expect(result).toBeUndefined();
  });
});
