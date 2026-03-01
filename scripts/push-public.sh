#!/usr/bin/env bash
# push-public.sh — Push filtered content to the public korlinx-wiki repo.
# Excludes: planning/, CLAUDE.md, .claude/, raw KOLINX source files.
# Respects .gitattributes export-ignore entries.
#
# Usage:  ./scripts/push-public.sh [branch]
#         branch defaults to "main"
#
# One-time setup:
#   git remote add public git@github.com:KORLINX/korlinx-wiki.git

set -euo pipefail

BRANCH="${1:-main}"
PUBLIC_REMOTE="public"
REPO_ROOT="$(git rev-parse --show-toplevel)"
PUBLIC_URL="$(git remote get-url "$PUBLIC_REMOTE" 2>/dev/null || true)"

echo "==> Checking public remote..."
if [ -z "$PUBLIC_URL" ]; then
  echo "ERROR: Remote '$PUBLIC_REMOTE' not found."
  echo "Run:  git remote add public git@github.com:KORLINX/korlinx-wiki.git"
  exit 1
fi
echo "    → $PUBLIC_URL"

# Create a temp directory and extract filtered archive there
TMPDIR_EXPORT="$(mktemp -d)"
cleanup() { rm -rf "$TMPDIR_EXPORT"; }
trap cleanup EXIT

echo "==> Exporting filtered archive from '$BRANCH'..."
# git archive honours export-ignore in .gitattributes
git -C "$REPO_ROOT" archive "$BRANCH" | tar -x -C "$TMPDIR_EXPORT"

# Safety: abort if private dirs leaked through
if [ -d "$TMPDIR_EXPORT/planning" ] || [ -f "$TMPDIR_EXPORT/CLAUDE.md" ]; then
  echo "ERROR: Private files found in export. Check .gitattributes export-ignore entries."
  exit 1
fi

echo "==> Initialising temp git repo..."
cd "$TMPDIR_EXPORT"
git init -q
git add -A
git commit -q -m "Public release: $(git -C "$REPO_ROOT" rev-parse --short "$BRANCH") $(date -u +%Y-%m-%dT%H:%MZ)"

echo "==> Pushing to $PUBLIC_REMOTE ($PUBLIC_URL)..."
git remote add public "$PUBLIC_URL"
git push public "HEAD:$BRANCH" --force

echo ""
echo "✓  Public repo updated successfully."
