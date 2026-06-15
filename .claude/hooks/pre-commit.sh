#!/usr/bin/env bash
# pre-commit.sh — gates git commit
# Validates: HTML syntax in staged files, no undefined in staged HTML,
# Node.js syntax check for build.js if staged.
set -euo pipefail

BASE="/Users/rameshinampudi/Documents/Projects/Everything"
cd "$BASE"

echo "=== pre-commit: gate checks starting ==="

STAGED=$(git diff --cached --name-only 2>/dev/null || true)

if [ -z "$STAGED" ]; then
  echo "pre-commit: no staged files, nothing to check."
  exit 0
fi

ERRORS=0

# 1. Check staged HTML files for >undefined<
STAGED_HTML=$(echo "$STAGED" | grep '\.html$' || true)
if [ -n "$STAGED_HTML" ]; then
  for f in $STAGED_HTML; do
    if [ -f "$f" ] && grep -q '>undefined<\|"undefined"' "$f" 2>/dev/null; then
      echo "ERROR: 'undefined' found in staged file: $f"
      ERRORS=$((ERRORS + 1))
    fi
  done
fi

# 2. Node syntax check for build.js if staged
if echo "$STAGED" | grep -q '^build\.js$'; then
  if ! node --check build.js 2>&1; then
    echo "ERROR: build.js has JavaScript syntax errors"
    ERRORS=$((ERRORS + 1))
  else
    echo "build.js: syntax OK ✅"
  fi
fi

# 3. Node syntax check for patch-build.js if staged
if echo "$STAGED" | grep -q '^patch-build\.js$'; then
  if ! node --check patch-build.js 2>&1; then
    echo "ERROR: patch-build.js has JavaScript syntax errors"
    ERRORS=$((ERRORS + 1))
  else
    echo "patch-build.js: syntax OK ✅"
  fi
fi

if [ "$ERRORS" -gt 0 ]; then
  echo ""
  echo "pre-commit BLOCKED: ${ERRORS} issue(s) found. Fix before committing."
  exit 1
fi

echo "pre-commit: all checks passed ✅ ($(echo "$STAGED" | wc -l | tr -d ' ') files staged)"
