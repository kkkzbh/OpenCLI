import { afterEach, describe, expect, it } from 'vitest';
import { DEFAULT_BROWSER_TAB_PLACEMENT, resolveBrowserTabPlacement } from './tab-placement.js';

describe('browser tab placement policy', () => {
  const original = process.env.OPENCLI_TAB_PLACEMENT;

  afterEach(() => {
    if (original === undefined) delete process.env.OPENCLI_TAB_PLACEMENT;
    else process.env.OPENCLI_TAB_PLACEMENT = original;
  });

  it('defaults to existing Chrome windows', () => {
    delete process.env.OPENCLI_TAB_PLACEMENT;
    expect(resolveBrowserTabPlacement()).toBe(DEFAULT_BROWSER_TAB_PLACEMENT);
  });

  it('accepts the explicit legacy owned-container policy', () => {
    expect(resolveBrowserTabPlacement('owned-container')).toBe('owned-container');
    expect(resolveBrowserTabPlacement('existing-window')).toBe('existing-window');
  });

  it('rejects unknown placement policies', () => {
    expect(() => resolveBrowserTabPlacement('windowless')).toThrow(/OPENCLI_TAB_PLACEMENT/);
  });
});
