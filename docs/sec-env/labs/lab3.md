# 🟩 LAB 3 — Run Kali Linux Container
🎯 Learning Goal

Deploy a Kali Linux container and install hacking tools.

📌 Prerequisites

Docker installed.

## SECTION A — Run Kali Container
```bash
docker run -it --name kali kalilinux/kali-rolling /bin/bash
```

Now you're inside Kali shell.

## SECTION B — Update and Install Tools
1. Update + upgrade
```bash
apt update && apt upgrade -y
```
2. Install essential hacking tools
```
apt install -y nmap sqlmap gobuster curl iputils-ping
```

## SECTION C — Verify Tools
```
nmap --version
sqlmap --version
gobuster --help
```

SECTION D — Troubleshooting
❌ “Temporary failure resolving”

Add nameserver:
```
echo "nameserver 8.8.8.8" >> /etc/resolv.conf
```
❌ Kali container exits immediately

Must re-run:
```
docker run -it kalilinux/kali-rolling /bin/bash
```
