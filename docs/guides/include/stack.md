```yaml
services:
  nginx:
    image: ghcr.io/cssnr/docker-nginx-proxy:latest
    environment:
      - SERVICE_NAME=app
      - SERVICE_PORT=3000
    depends_on:
      - app
    ports:
      - '${PORT:-80}:80'

  app:
    image: ghcr.io/smashedr/node-badges:latest
    depends_on:
      - redis

  redis:
    image: redis:6-alpine
    command: 'redis-server --appendonly yes'
    volumes:
      - redis_data:/data

volumes:
  redis_data:
```
