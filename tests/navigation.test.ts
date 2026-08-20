import { describe, expect, it, vi } from 'vitest';
import { transitionTo } from '../src/navigation';

describe('transitionTo', () => {
  it('uses a View Transition when the browser supports it', () => {
    const pushState = vi.spyOn(window.history, 'pushState');
    const startViewTransition = vi.fn((update: () => void) => update());
    Object.defineProperty(document, 'startViewTransition', { value: startViewTransition, configurable: true });

    transitionTo('/projects/tancan-agent');

    expect(startViewTransition).toHaveBeenCalledOnce();
    expect(pushState).toHaveBeenCalledWith({}, '', '/projects/tancan-agent');
  });
});
