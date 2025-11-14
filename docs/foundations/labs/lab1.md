# Lab 1 – Basic Linux & Cybersecurity Fundamentals

**Objective:** Apply foundational concepts of cybersecurity with hands-on Linux exercises.

---

## 1️⃣ File Navigation & CLI Commands

Create a workspace:

```bash
mkdir security-lab
cd security-lab
touch example.txt
pwd
ls -la
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
