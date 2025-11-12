import { describe, it, expect, vi, beforeEach } from 'vitest';
import { avc } from './avgColor.js';

describe('avc', () => {
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
      width: 1,
      height: 1,
    } as unknown as HTMLCanvasElement;

    // Mock document.createElement
    vi.spyOn(document, 'createElement').mockReturnValue(mockCanvas);

    // Mock Image constructor
    const ImageMock = vi.fn().mockImplementation(() => {
      mockImage = {
        onload: () => {},
        onerror: () => {},
        width: 1,
        height: 1,
        crossOrigin: '',
        src: '',
      } as unknown as HTMLImageElement;
      return mockImage;
    });

    // Replace window.Image with mock (works in browser environment)
    Object.defineProperty(window, 'Image', {
      writable: true,
      configurable: true,
      value: ImageMock,
    });
  });

  it('should return the average color of the image', async () => {
    const colorPromise = avc('test.jpg');
    (mockImage.onload as Function)();

    const result = await colorPromise;
    expect(result).toBe('rgb(255, 0, 0)');
  });

  it('should handle errors when loading image', async () => {
    const colorPromise = avc('invalid.jpg');
    (mockImage.onerror as Function)('Failed to load');

    await expect(colorPromise).rejects.toThrow('Failed to load image');
  });
});
