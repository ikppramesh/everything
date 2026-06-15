#!/usr/bin/env bash
# post-build.sh — runs automatically after `node build.js`
# Checks for undefined values in generated HTML and reports solution count.
set -euo pipefail

BASE="/Users/rameshinampudi/Documents/Projects/Everything"
cd "$BASE"

echo "=== post-build: validation starting ==="

# Count solution directories (category/solution pairs)
SOLUTION_COUNT=$(find . -mindepth 2 -maxdepth 2 -type d \
  ! -path './.git/*' \
  ! -path './_shared/*' \
  ! -path './_pitches/*' \
  ! -path './_reports/*' \
  ! -path './.claude/*' \
  | wc -l | tr -d ' ')

echo "Solutions found: ${SOLUTION_COUNT}"

# Grep for >undefined< and "undefined" in generated HTML files
UNDEFINED_HITS=$(grep -rl '>undefined<\|"undefined"\|: undefined' \
  --include="*.html" \
  --exclude-dir=".git" \
  --exclude-dir=".claude" \
  . 2>/dev/null || true)

if [ -n "$UNDEFINED_HITS" ]; then
  echo ""
  echo "ERROR: 'undefined' found in generated HTML:"
  echo "$UNDEFINED_HITS" | sed 's/^/  /'
  echo ""
  echo "Fix the SOLUTIONS entry fields before proceeding."
  exit 1
fi

# Check that index.html files don't contain placeholder data
PLACEHOLDER_HITS=$(grep -rl 'Record 1\|Category 1\|>undefined<' \
  --include="index.html" \
  --exclude-dir=".git" \
  . 2>/dev/null || true)

if [ -n "$PLACEHOLDER_HITS" ]; then
  echo ""
  echo "ERROR: placeholder data found in demo index.html files:"
  echo "$PLACEHOLDER_HITS" | sed 's/^/  /'
  echo ""
  echo "Ensure all SOLUTIONS entries use Indian-context mock data."
  exit 1
fi

echo "post-build: all ${SOLUTION_COUNT} solutions passed validation ✅"
