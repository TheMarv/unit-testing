import { greet } from './greet';

describe('greet function', () => {
  it('returns a string "Hello Jane!" if called greet("Jane")', () => {
    const result = greet('Jane');
    expect(result).toBe('Hello Jane!');
  });

  it('returns a string "Hello stranger!" if called greet()', () => {
    const result = greet();
    expect(result).toBe('Hello stranger!');
  });

  it('returns a string "Hello Coach!" if called with a coach\'s name', () => {
    expect(greet('Andrea')).toBe('Hello Coach!');
    expect(greet('Felix')).toBe('Hello Coach!');
    expect(greet('Gregor')).toBe('Hello Coach!');
    expect(greet('Marc')).toBe('Hello Coach!');
  });
});
