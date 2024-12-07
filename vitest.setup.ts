import { beforeEach } from 'vitest';

beforeEach(() => {});

global.Image =
  global.Image ||
  class MockImage {
    onload: () => void = () => {};
    onerror: (event: string | Event) => void = () => {};
    src: string = '';
    width: number = 0;
    height: number = 0;
  };

global.document = global.document || {
  createElement: () => ({
    getContext: () => null,
  }),
};
