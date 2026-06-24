Commit all staged and unstaged changes on the current branch, push to the remote, and file a PR against main.

## Steps

1. Run `git status` and `git diff` (staged + unstaged) in parallel with `git log --oneline -10` to understand what has changed and the commit message style used in this repo.

2. Stage all changed and untracked files with `git add -A`, then commit using a message that summarises the changes. Format:

```bash
git commit -m "$(cat <<'EOF'
<subject line>
EOF
)"
```

   If there is nothing to commit (clean working tree), skip this step and proceed to push + PR.

3. Push the current branch to the remote:

```bash
git push -u origin HEAD
```

4. File the PR against `main` using the gh CLI:

```bash
gh pr create --title "<title>" --body "$(cat <<'EOF'
## Summary
- <bullet points describing what changed and why>
EOF
)"
```

5. Return the PR URL to the user.

## Rules

- Do **not** skip pre-commit hooks (`--no-verify`).
- Do **not** force-push unless the user explicitly asks.
- Keep the commit subject under 72 characters.
- Derive the PR title from the commit subject; do not repeat it verbatim in the body.
