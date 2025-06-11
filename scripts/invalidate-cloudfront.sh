#!/bin/bash
# Invalidate all objects in the CloudFront distribution

if [[ -z "$DISTRIBUTION_ID" ]]; then
  echo "DISTRIBUTION_ID is not set"
  exit 1
fi

aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"