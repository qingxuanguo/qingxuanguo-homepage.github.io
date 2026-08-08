#!/bin/bash

# Jekyll Project Cleanup Script
# Usage: ./clean_build.sh

echo "🧹 Cleaning Jekyll cache and build artifacts..."

# Remove build outputs
rm -rf _site .jekyll-cache .jekyll-metadata

# Remove unused files
UNUSED_FILES=(
    "images/profile_.jpg"
    "images/500x300.png"
    "assets/js/collapse.js"
    "assets/css/collapse.css"
    "_includes/analytics.html"
    "_includes/fetch_google_scholar_stats.html"
)

for file in "${UNUSED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "🗑️ Removing unused file: $file"
        rm "$file"
    fi
done

# Fix run_server.sh if it contains invalid command
if [ -f "run_server.sh" ]; then
    # Check if it contains the problematic command and fix it
    if grep -q "jekyll liveserve" "run_server.sh"; then
        echo "🔧 Fixing run_server.sh command"
        sed -i 's/jekyll liveserve/jekyll serve/' "run_server.sh"
    fi
fi

echo "✅ Cleanup completed!"