import { ArgumentError } from '../errors.js';

/** Where an OpenCLI-owned browser tab is created. */
export type BrowserTabPlacement = 'existing-window' | 'owned-container';

/** Existing Chrome is the primary surface for owned automation tabs. */
export const DEFAULT_BROWSER_TAB_PLACEMENT: BrowserTabPlacement = 'existing-window';

export function resolveBrowserTabPlacement(raw: string | undefined = process.env.OPENCLI_TAB_PLACEMENT): BrowserTabPlacement {
  if (raw === undefined || raw === '') return DEFAULT_BROWSER_TAB_PLACEMENT;
  if (raw === 'existing-window' || raw === 'owned-container') return raw;
  throw new ArgumentError(
    `OPENCLI_TAB_PLACEMENT must be one of: existing-window, owned-container. Received: "${raw}"`,
  );
}
