---
applyTo: "**/*"
description: "Use when editing any part of the project, including frontends, backends, services, and shared libraries."
---

# Project Instructions

## Context

**Tech stack**

* Frontends: Nuxt 4 with Vue 3, TypeScript, and Nitro server engine
* Mobile: Flutter with Dart 3.0
* Backends: FastAPI or Django with Python 3.14
* Services: Golang with Go 1.20

**Repository structure**

```text
frontends/
|── mainsite/
|── mobile/
|
backends/
|── api/
|── worker/
services/
|── auth/
└── database/
```

* **frontends/** Contains the frontend applications, each in its own subdirectory (e.g., `mainsite`, `mobile`), generally written in Nuxt 4 with Vue 3, TypeScript, and Nitro server engine
    * **frontends/mainsite/** Main website frontend, generally written in Nuxt 4 with Vue 3, TypeScript, and Nitro server engine
    * **frontends/mobile/** Mobile application frontend, generally written in Flutter with Dart 3.0 (not always present in the repository)
* **backends/** Backend applications, generally written in Python using FastAPI or Django for rapid development and rich ecosystem
    * **backends/api/** Main API backend to external clients, generally written in Python using FastAPI or Django for rapid development and rich ecosystem
    * **backends/worker/** Background worker for asynchronous tasks, generally written in Python using Celery + RQ or Golang
* **services/** Shared services that can be used across frontends and backends, such as authentication or database access, generally written in Golang with Go 1.20 for performance and concurrency benefits
