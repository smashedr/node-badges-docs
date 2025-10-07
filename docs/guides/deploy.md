---
pageClass: deploy-page
---

# Deploy

This is ready for deployment using both [Docker](#to-docker) and [Node](#to-node).

If using [Node](#to-node) you need a [Redis](https://github.com/redis/redis) server.

Public Server:

```text
https://badges.cssnr.com/
```

[![Server Status](https://img.shields.io/website?url=https%3A%2F%2Fbadges.cssnr.com%2F&up_message=online&down_message=offline&style=for-the-badge&logo=nodedotjs&logoColor=white&label=server)](https://badges.cssnr.com/)
[![Uptime](https://badges.cssnr.com/uptime?style=for-the-badge)](https://badges.cssnr.com/uptime?style=for-the-badge)

## To Docker

[![Deploy to Render](https://img.shields.io/badge/Deploy_to_Render-4351E8?style=for-the-badge&logo=render)](https://render.com/deploy?repo=https://github.com/smashedr/node-badges)

This is designed to be deployed with [Docker Compose](#compose-examples) which includes redis.

To deploy to a Standalone Docker host, see [docker-compose.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose.yaml).

To deploy to a Swarm cluster using Traefik, see [docker-compose-swarm.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose-swarm.yaml).

To run directly, you need to set the `REDIS_URL`.

```shell
docker run -e "REDIS_URL=redis://redis:6379" -p 80:80 ghcr.io/smashedr/node-badges:latest
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

## Resources

The app loads all [Simple Icon](https://simpleicons.org/) and [Lucide Icon](https://lucide.dev/icons/) into memory.
This makes the base memory usage about `80 MB`. Therefore, you should allocate at least `100 MB` for request overhead.

```text
NAME                        CPU %  MEM USAGE
smashedr-node-badges_app    0.00%  80.52MiB
smashedr-node-badges_nginx  0.00%  4.984MiB
smashedr-node-badges_redis  0.00%  4.879MiB
```

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
