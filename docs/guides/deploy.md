---
pageClass: deploy-page
---

# Deploy

[[toc]]

This is ready for deployment using both [Docker](#to-docker) and [Node](#to-node).

Docker is recommended. If using [Node](#to-node) you need a [Redis](https://github.com/redis/redis) server.

Public Server:

```text
https://badges.cssnr.com/
```

[![Server Status](https://img.shields.io/website?url=https%3A%2F%2Fbadges.cssnr.com%2F&up_message=online&down_message=offline&style=for-the-badge&logo=nodedotjs&logoColor=white&label=server)](https://badges.cssnr.com/)
[![Uptime](https://badges.cssnr.com/uptime?style=for-the-badge)](https://badges.cssnr.com/uptime?style=for-the-badge)
[![Uptime Robot 7d](https://shields.cssnr.com/uptimerobot/ratio/7/m801549868-4eaa810d55bbf4039711a48a?logo=uptimekuma&logoColor=white&style=for-the-badge&label=Uptime%20%287d%29)](https://stats.uptimerobot.com/FNLsoJaKUf/801549868)
[![Uptime Kuma 24h](https://uptime-nj.hosted-domains.com/api/badge/30/uptime?style=for-the-badge)](https://uptime-nj.hosted-domains.com/status/node-badges)

## To Docker

[![Deploy to Render](https://img.shields.io/badge/Deploy_to_Render-4351E8?style=for-the-badge&logo=render)](https://render.com/deploy?repo=https://github.com/smashedr/node-badges)

This is designed to be deployed with [Docker Compose](#compose-examples) which includes redis.

To deploy to a Standalone Docker host, see [docker-compose.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose.yaml).

To deploy to a Swarm cluster using Traefik, see [docker-compose-swarm.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose-swarm.yaml).

To run directly, you need to set the `REDIS_URL`. You can **NOT** use `localhost` in docker.

```shell
docker run -e "REDIS_URL=redis://redis:6379" -p 80:3000 ghcr.io/smashedr/node-badges:latest
```

Change `80` to the host port you want the app to listen on.  
The container port should be `3000` unless you set the `PORT` variable.

```shell
docker run -e "REDIS_URL=redis://redis:6379" -e "PORT=80" -p 80:80 ghcr.io/smashedr/node-badges:latest
```

### Compose Examples

💡 _Click on a heading to expand/collapse the item._

<details open><summary>Basic</summary>

<!--@include: include/basic.md-->

</details>
<details><summary>With Healthcheck</summary>

<!--@include: include/healthcheck.md-->

</details>
<details><summary>Full Stack Example</summary>

<!--@include: include/stack.md-->

</details>
<details><summary>Swarm with Traefik</summary>

<!--@include: include/swarm.md-->

</details>

## To Node

This is ready to be deployed to services like Render using their Redis ([Render Key Value](https://render.com/docs/key-value)) store.
You can set the redis server url with the `REDIS_URL` environment variable. The default value is `redis://redis:6379`.

The server listens on the `PORT` environment variable and installs/starts normally.

```shell
npm install
npm start
```

To use without redis, install `node-cache`, comment out the redis lines, and uncomment the node-cache lines.

## API Keys

API Keys and secrets are provided as environment variables.

| Variable       | Description                 |
| :------------- | :-------------------------- |
| `VT_API_KEY`   | VirusTotal API Token        |
| `GITHUB_TOKEN` | GitHub PAT (no permissions) |

Endpoints that require/recommend API keys.

| Endpoint | Required   | Recommended  |
| -------- | ---------- | ------------ |
| `/vt/**` | VT_API_KEY | GITHUB_TOKEN |

Currently, the only endpoints that require API keys are the VirusTotal endpoints.

## Resources

The app loads all [Simple Icon](https://simpleicons.org/) and [Lucide Icon](https://lucide.dev/icons/) into memory.
This makes the base memory usage about `80 MB`. Therefore, you should allocate at least `100 MB` for request overhead.

```text
NAME                        CPU %  MEM USAGE
smashedr-node-badges_app    0.00%  80.52MiB
smashedr-node-badges_nginx  0.00%  4.984MiB
smashedr-node-badges_redis  0.00%  4.879MiB
```

## Developing

You can run the dev server with [Docker](#with-docker) compose or [Node](#with-node) run.

### With Docker

Docker includes Redis and live server reloading with the [docker-compose-dev.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose-dev.yaml) file.

```shell
docker compose -f "docker-compose-dev.yaml" up --build --remove-orphans --force-recreate
```

Then visit: http://localhost/

<details><summary>How Live Reloading Works in Docker</summary>

This mounts the `./src` directory into the container for live reloading with `nodemon`.

To use a different source path set the `APP_FILES` environment variable to your source.

For more details, see the [docker-compose-dev.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose-dev.yaml) file.

---

</details>

### With Node

Make sure you have a redis server running and set the `REDIS_URL` environment variable.

```shell
export REDIS_URL=redis://localhost:6379

npm i
npm run dev
```

Then visit: http://localhost:3000/

### With Custom Port

To use a different port set the `PORT` environment variable then run the dev server.

```shell
export PORT=8080
```

&nbsp;

<!--@include: @include/wip.md-->

<style module>
.deploy-page summary {
    color: var(--vp-c-brand-1);
}
.deploy-page summary:hover {
    filter: brightness(115%);
    /*color: var(--vp-c-indigo-2);*/
    /*text-decoration: underline;*/
    /*text-decoration-thickness: 1px;*/
}
</style>
