# Module 2 — Build Your First Security Environment

## Lessons

In this module, learners will build a full offensive–defensive lab using Docker, DVWA, and Kali Linux containers.
This is the same setup used by security engineers and penetration testers to safely practice hacking skills.

📘 LESSONS
# 1. Docker Fundamentals

Docker lets you run applications inside containers, which are lightweight, isolated mini‑systems.

🔍 Key Concepts

Images → blueprints (e.g., “Kali Linux image”)

Containers → running instances of images

Ports → how your computer talks to containers

Volumes → saved data

🧠 Simple Diagram
Your Computer
   │
   ├── Docker Engine
   │      ├── DVWA Container (port 8080 → 80)
   │      └── Kali Linux Container (interactive shell)

# 2. What Makes DVWA Vulnerable?

DVWA = Damn Vulnerable Web App.
It intentionally includes broken code such as:

SQL Injection

XSS

File Upload Exploits

CSRF

Command Injection

DVWA is designed for learning and practicing security skills safely.

# 3. Kali Linux Overview

Kali Linux is a security-focused Linux distribution.

It includes:

nmap (network scanner)

sqlmap (SQLi exploitation)

gobuster (dir brute-forcing)

burpsuite (web proxy)

hydra (password brute‑forcing)

We'll run Kali inside a container for fast setup and safe experimentation.

4. Ethical Hacking Rules

Before hacking anything:

✔ You must have permission
✔ Only attack systems you own or are authorized to test
✔ Do not attempt real-world targets
✔ Learn responsibly

---

# Labs

## Lab 1 — Install Docker
### Windows/Mac
- Install Docker Desktop
```bash
docker --version
docker ps
```
