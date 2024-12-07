import { describe, it, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { serverAvc } from './serverAvgColor.js';
import sharp from 'sharp';

vi.mock('sharp');

describe('serverAvc', () => {
  it('should return the average color of the image', async () => {
    const mockData = { data: new Uint8Array([255, 0, 0, 255]) };
    (sharp as unknown as Mock).mockReturnValue({
      resize: vi.fn().mockReturnThis(),
      toBuffer: vi.fn().mockResolvedValue(mockData),
    });

    const result = await serverAvc('./test.png');
    expect(result).toBe('rgb(255, 0, 0, 255)');
  });

  it('should return undefined on error', async () => {
    (sharp as unknown as Mock).mockReturnValue({
      resize: vi.fn().mockReturnThis(),
      toBuffer: vi.fn().mockRejectedValue(new Error('Processing failed')),
    });

    const result = await serverAvc('./invalid.png');
    expect(result).toBeUndefined();
  });
});
