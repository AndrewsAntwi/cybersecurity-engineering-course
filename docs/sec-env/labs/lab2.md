# 🟩 LAB 2 — Deploy DVWA (Damn Vulnerable Web App)
🎯 Learning Goal

Run a vulnerable web app in Docker.

📌 Prerequisites

Docker installed.

## SECTION A — Pull DVWA Image
```bash
docker pull vulnerables/web-dvwa
```

## SECTION B — Run DVWA Container
```bash
docker run -d -p 8080:80 --name dvwa vulnerables/web-dvwa
```

Explanation:
```
-d → run in background

-p 8080:80 → expose port

--name dvwa → easier reference
```


## SECTION C — Verify DVWA is running
```bash
docker ps
```

Expected output:
---
dvwa     vulnerables/web-dvwa    Up 30 seconds    0.0.0.0:8080->80/tcp
---

## SECTION D — Access DVWA

Open browser:

```
http://127.0.0.1:8080
```

If asked to reset DB:

```
Username: admin

Password: password
```

Click Create / Reset Database


## SECTION E — Troubleshooting
❌ Browser shows 404

→ Make sure container is running:
```bash
docker start dvwa
```

❌ Port already in use

Find processes:
```bash
sudo lsof -i :8080
```

Kill conflicting process if needed.
