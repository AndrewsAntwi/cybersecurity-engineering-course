#!/bin/bash

# -----------------------------------------------------------
#  Auto-Initialize GitHub Repo with Structured Commit History
# -----------------------------------------------------------

REMOTE_URL="https://github.com/AndrewsAntwi/cybersecurity-engineering-course.git"

echo "Initializing repository..."

git init
git branch -m main

git remote add origin "$REMOTE_URL"

echo "Adding core files..."
git add .
git commit -m "Initial commit: Full course structure and assets"

# -----------------------------------------------------------
#  Create chronological commit history for professionalism
# -----------------------------------------------------------

echo "Creating structured commit history..."

# SECTION 1
git add section-01-foundations
git commit -m "Add Section 01: Cybersecurity Foundations with labs and diagrams"

# SECTION 2
git add section-02-security-labs
git commit -m "Add Section 02: Vulnerable lab environments and security tools setup"

# SECTION 3
git add section-03-web-attacks
git commit -m "Add Section 03: Web security attacks including SQLi and XSS labs"

# SECTION 4
git add section-04-secure-coding
git commit -m "Add Section 04: Secure coding fundamentals and defensive best practices"

# SECTION 5
git add section-05-linux-hardening
git commit -m "Add Section 05: Linux system hardening and SSH security"

# SECTION 6
git add section-06-cloud-security
git commit -m "Add Section 06: AWS security configuration labs and cloud hardening"

# SECTION 7
git add section-07-siem
git commit -m "Add Section 07: SIEM setup and log collection using Wazuh"

# SECTION 8
git add section-08-detection-engineering
git commit -m "Add Section 08: Detection engineering labs and custom SIEM rules"

# SECTION 9
git add section-09-devsecops
git commit -m "Add Section 09: DevSecOps pipeline with Trivy GitHub Action"

# SECTION 10
git add section-10-capstone
git commit -m "Add Section 10: Capstone project with final documentation templates"

# SITE
git add site
git commit -m "Add static LMS site for course distribution"

# FINAL
git add README.md LICENSE
git commit -m "Finalize course repo with README and licensing"

echo "Pushing to GitHub..."
git push -u origin main

echo "Repository successfully initialized and pushed!"
