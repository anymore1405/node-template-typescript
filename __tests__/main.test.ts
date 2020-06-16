import { hello } from '../src/main';

test('return Hello World', () => {
  expect(hello()).toBe('Hello World!');
});
