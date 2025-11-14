# 🟩 LAB 4 — Connect Kali → DVWA
🎯 Learning Goal

Use Kali tools to scan and interact with DVWA over localhost.

## SECTION A — Determine Host IP
On Mac/Windows:

Docker internal hostname:

```
host.docker.internal
```

On Linux:

Docker bridge IP:

```
ip addr show docker0
```

Usually:
```
172.17.0.1
```

SECTION B — Test Connectivity

Inside Kali:
```
curl http://host.docker.internal:8080
```

(Linux)
```
curl http://172.17.0.1:8080
```

You should see DVWA HTML.

## SECTION C — Scan DVWA with Nmap
```bash
nmap -sV host.docker.internal
```

## SECTION D — Troubleshooting
❌ “Failed to connect”

→ Ensure DVWA container is running
→ Check port mapping
→ Ping host:

```
ping host.docker.internal
```
