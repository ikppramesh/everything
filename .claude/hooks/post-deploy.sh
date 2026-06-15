#!/usr/bin/env bash
# post-deploy.sh — verifies GitHub Pages is reachable after git push.
# Waits up to 30s for the deployment to propagate, then checks HTTP status.
set -euo pipefail

PAGES_URL="https://ikppramesh.github.io/everything/"
MAX_RETRIES=6
WAIT_SECS=5

echo "=== post-deploy: verifying GitHub Pages ==="
echo "URL: ${PAGES_URL}"

for i in $(seq 1 $MAX_RETRIES); do
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
    --max-time 10 \
    --location \
    "$PAGES_URL" 2>/dev/null || echo "000")

  if [ "$HTTP_STATUS" = "200" ]; then
    echo "post-deploy: GitHub Pages returned HTTP ${HTTP_STATUS} ✅"
    echo "Live at: ${PAGES_URL}"
    exit 0
  fi

  echo "Attempt ${i}/${MAX_RETRIES}: HTTP ${HTTP_STATUS} — waiting ${WAIT_SECS}s..."
  sleep $WAIT_SECS
done

echo ""
echo "WARNING: GitHub Pages did not return HTTP 200 after $((MAX_RETRIES * WAIT_SECS))s."
echo "Last status: ${HTTP_STATUS}"
echo "Pages may still be deploying — check https://github.com/ikppramesh/everything/actions"
# Exit 0 (warning only) — Pages deploy can take up to 10 minutes
exit 0
