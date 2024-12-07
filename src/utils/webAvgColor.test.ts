import { describe, it, expect, vi, beforeEach } from 'vitest';
import { webAvc } from './webAvgColor.js';

describe('webAvc', () => {
  let mockImage: HTMLImageElement;
  let mockCanvas: HTMLCanvasElement;
  let mockContext: CanvasRenderingContext2D;

  beforeEach(() => {
    mockContext = {
      drawImage: vi.fn(),
      getImageData: vi.fn().mockReturnValue({
        data: new Uint8ClampedArray([255, 0, 0, 255]),
      }),
    } as unknown as CanvasRenderingContext2D;

    mockCanvas = {
      getContext: vi.fn().mockReturnValue(mockContext),
    } as unknown as HTMLCanvasElement;

    global.document.createElement = vi.fn().mockReturnValue(mockCanvas);
    global.Image = vi.fn().mockImplementation(() => {
      mockImage = {
        onload: () => {},
        onerror: (event: string | Event) => {},
        width: 1,
        height: 1,
      } as unknown as HTMLImageElement;
      return mockImage;
    });
  });

  it('should return the average color of the image', async () => {
    const colorPromise = webAvc('test.jpg');
    (mockImage.onload as Function)();

    const result = await colorPromise;
    expect(result).toBe('rgb(255, 0, 0)');
  });

  it('should handle errors when loading image', async () => {
    const colorPromise = webAvc('invalid.jpg');
    (mockImage.onerror as Function)('Failed to load');

    await expect(colorPromise).rejects.toThrow('Ошибка загрузки изображения');
  });
});
