```yaml
version: '3.8'

services:
  nginx:
    image: ghcr.io/cssnr/docker-nginx-proxy:latest
    environment:
      - SERVICE_NAME=app
      - SERVICE_PORT=3000
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '1.0'
          memory: 64M
      labels:
        - traefik.enable=true
        - traefik.docker.network=traefik-public
        - traefik.constraint-label=traefik-public
        - traefik.http.routers.node-badges-http.rule=Host(`badges.cssnr.com`)
        - traefik.http.routers.node-badges-http.entrypoints=http
        - traefik.http.routers.node-badges-http.middlewares=https-redirect
        - traefik.http.routers.node-badges-https.rule=Host(`badges.cssnr.com`)
        - traefik.http.routers.node-badges-https.entrypoints=https
        - traefik.http.routers.node-badges-https.tls=true
        - traefik.http.services.node-badges-https.loadbalancer.server.port=80
    healthcheck:
      test: ['CMD-SHELL', 'curl -sf localhost:80/health-check || exit 1']
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    depends_on:
      - app
    networks:
      - internal
      - traefik-public

  app:
    image: ghcr.io/smashedr/node-badges:latest
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '2.0'
          memory: 256M
    healthcheck:
      test: ['CMD-SHELL', 'curl -sf localhost:3000/app-health-check || exit 1']
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    depends_on:
      - redis
    networks:
      - internal

  redis:
    image: redis:6-alpine
    command: 'redis-server --appendonly yes'
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '1.0'
          memory: 128M
    volumes:
      - redis_data:/data
    networks:
      - internal

volumes:
  redis_data:

networks:
  internal:
    driver: overlay
  traefik-public:
    external: true
```
