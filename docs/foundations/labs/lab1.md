# Lab 1 – Basic Linux & Cybersecurity Fundamentals

**Objective:** Apply foundational concepts of cybersecurity with hands-on Linux exercises.

---

## 1️⃣ File Navigation & CLI Commands

Create a workspace:

```bash
pwd
ls -al
cd /path
mkdir lab
touch file.txt
rm -rf directory/
cp file1 file2
mv old new

```
## System Information
```bash
uname -a
hostnamectl
top
htop
df -h
du -sh /var/log
```

## 2️⃣ Install Essential Tools
```bash
sudo apt update
sudo apt install curl wget git -y
```

3️⃣ Apply File Permissions (Confidentiality)
```bash
# Make file readable/writeable only by owner
chmod 600 example.txt

# Verify permissions
ls -l example.txt

```
## Networking 
```bash
ip a
ip r
ss -tulpn
ping google.com
dig example.com
curl -I https://site.com
```

## Permissions 
```bash
chmod 755 script.sh
chown root:root file
```

# Security Tooling 
```bash
nmap -sV target.com
tcpdump -i eth0
grep "error" /var/log/syslog
journalctl -xe
```

4️⃣ Check System Logs (Detective Controls)
# Monitor failed login attempts
```bash
grep "Failed password" /var/log/auth.log

5️⃣ Basic User Management (Responding to Incidents)
# Lock a suspicious account
```bash
sudo usermod -L suspicioususer

# a) Identify and Protect
# Create a list of critical files on your system.
# Apply basic file permissions (e.g., chmod 600 secret.txt on Linux).

# b) Detect
# Check system logs for failed login attempts:

grep "Failed password" /var/log/auth.log

# c) Respond
# Disable a suspicious user account:
sudo usermod -L baduser
```
<button id="markCompleteBtn" data-module="foundations" class="cta-btn">Mark Module Complete</button>
