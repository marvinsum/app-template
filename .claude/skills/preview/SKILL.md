Kill all running Vite dev servers, install dependencies, then start the dev server for this worktree.

```bash
(pkill -f "vite" 2>/dev/null || true) && npm install && npm run dev
```

Run `npm run dev` in the background. Report the URL once it appears in the output.
