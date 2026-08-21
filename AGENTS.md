# Local OpenCLI Fork

This repository is maintained as a small local patch on top of the official
`upstream/main` branch. Keep CLI and Chrome extension changes in the same
commit series.

## Upgrade flow

1. Keep `origin` as `kkkzbh/OpenCLI` and `upstream` as `jackwener/OpenCLI`.
2. Start from a clean worktree, then run:

   ```bash
   git fetch upstream --prune
   git rebase upstream/main
   npm install
   npm run typecheck
   npm test
   npm run build
   (cd extension && npm install && npm run typecheck && npm run build)
   npm link
   ```

3. Reload the locally built extension and run `opencli doctor` plus the
   existing-window cleanup smoke tests.
4. Commit the patch and push it to `origin`. Do not edit generated `dist`
   files by hand; regenerate them from the same commit.

