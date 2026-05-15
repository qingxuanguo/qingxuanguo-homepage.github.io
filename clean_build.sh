#!/bin/bash

# Jekyll Clean Build and Serve Script
# Usage: ./clean_build.sh

echo "🧹 Cleaning Jekyll cache..."
rm -rf _site .jekyll-cache .jekyll-metadata

echo "🔨 Building Jekyll site..."
bundle exec jekyll build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Starting server..."
    bundle exec jekyll serve --host 0.0.0.0 --port 4000 &
    
    # Wait for server to start
    sleep 2
    
    # Open browser
    echo "🌐 Opening browser..."
    if command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:4000
    elif command -v open &> /dev/null; then
        open http://localhost:4000
    else
        echo "Please open http://localhost:4000 in your browser"
    fi
    
    # Bring server to foreground
    wait
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
