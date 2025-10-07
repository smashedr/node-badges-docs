```yaml
app:
  image: ghcr.io/smashedr/node-badges:latest
  env:
    REDIS_URL: 'redis://redis:6379'
  healthcheck:
    test: ['CMD-SHELL', 'curl -sf localhost:3000/app-health-check || exit 1']
    interval: 30s
    timeout: 10s
    retries: 3
    start_period: 30s
```
