# Lab 2 – Building Security Environment: Docker Fundamentals

Docker lets you run applications inside containers, which are lightweight, isolated mini‑systems.


🔍 Key Concepts

Images → blueprints (e.g., “Kali Linux image”)

Containers → running instances of images

Ports → how your computer talks to containers

Volumes → saved data


🔍 Visualization
+-------------------------------------------------------+
|                Your Computer (Host)                   |
|  +-----------------+   +---------------------------+  |
|  | DVWA Container  |   | Kali Linux Container     |  |
|  | Port: 8080 → 80 |   | Interactive Shell & Tools|  |
|  +-----------------+   +---------------------------+  |
|                 Docker Engine                         |
+-------------------------------------------------------+

# 🟩 LAB 1 — Install & Configure Docker
## 🎯 Learning Goal

Install Docker and verify it is working.

### SECTION A — Install Docker (Mac/Windows)
1. Download Docker Desktop

Go to:
https://www.docker.com/products/docker-desktop/

2. Install normally

Follow on-screen instructions.

3. Verify install
```bash
docker --version
docker ps
```

Expected Output
```
Docker version 27.x.x, build xxxx
CONTAINER ID   IMAGE   COMMAND   STATUS   PORTS   NAMES
```

### SECTION B — Install Docker (Ubuntu/Linux)
1. Update system
```bash
sudo apt update && sudo apt upgrade -y
```

2. Install Docker Engine
```bash
sudo apt install docker.io -y
```

3. Enable Docker on startup
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

4. Verify service status
```bash
systemctl status docker
```

Look for: active (running).


### SECTION C — Post-Installation Fix (Linux)

Fix “permission denied” when running Docker:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### SECTION D — Troubleshooting
❌ Docker Desktop won’t start

→ Restart the computer.
→ Ensure virtualization is enabled (BIOS/UEFI).

❌ permission denied

→ Add user to docker group (above).

❌ Containers won’t start

Check logs:
```bash
docker logs <container-id>
```

# Basic Install

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker

# Verify installation
docker --version
docker ps

```
