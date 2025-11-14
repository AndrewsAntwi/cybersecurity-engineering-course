#!/bin/bash
# -------------------------------
# Cybersecurity LMS MkDocs Deploy
# -------------------------------

set -e  # exit on error

# 1️⃣ Check Python & pip
if ! command -v python3 &> /dev/null
then
    echo "Python3 is required. Please install Python 3.x."
    exit 1
fi

if ! command -v pip &> /dev/null
then
    echo "pip is required. Installing pip..."
    python3 -m ensurepip --upgrade
fi

# 2️⃣ Install dependencies
echo "Installing MkDocs and plugins..."
pip install --upgrade pip
pip install mkdocs mkdocs-material mkdocs-awesome-pages-plugin

# 3️⃣ Serve locally (optional)
echo "Do you want to serve locally for preview? (y/n)"
read serve_choice
if [ "$serve_choice" = "y" ]; then
    echo "Serving locally at http://127.0.0.1:8000 ..."
    mkdocs serve
    echo "Stopped local server."
fi

# 4️⃣ Build the static site
echo "Building static site..."
mkdocs build --clean
echo "Site built in ./site folder."

# 5️⃣ Push to GitHub Pages
echo "Do you want to deploy to GitHub Pages? (y/n)"
read deploy_choice
if [ "$deploy_choice" = "y" ]; then
    echo "Deploying to GitHub Pages..."
    mkdocs gh-deploy --force
    echo "Deployment complete!"
else
    echo "Deployment skipped. You can deploy manually later using:"
    echo "  mkdocs gh-deploy --force"
fi

echo "✅ Done!"
