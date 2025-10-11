# Badges

[[toc]]

### GHCR Image Size

[![Image Size](https://badges.cssnr.com/ghcr/size/smashedr/node-badges)](https://badges.cssnr.com/ghcr/size/smashedr/node-badges)

`/ghcr/size/{owner}/{pacakge}`  
`/ghcr/size/{owner}/{pacakge}/{tag}`

Without the `tag` it defaults to `latest`, these are equivalent.

- https://badges.cssnr.com/ghcr/size/smashedr/node-badges
- https://badges.cssnr.com/ghcr/size/smashedr/node-badges/latest

_For more options see the [Query Parameters](get-started.md#parameters)._

[![Image Size](https://badges.cssnr.com/ghcr/size/smashedr/node-badges?labelColor=blueviolet&lucide=scale&color=seagreen&style=for-the-badge&label=node%20badges)](https://badges.cssnr.com/ghcr/size/smashedr/node-badges?labelColor=blueviolet&lucide=scale&color=seagreen&style=for-the-badge&label=node%20badges)

```text
https://badges.cssnr.com/ghcr/size/smashedr/node-badges?labelColor=blueviolet&lucide=scale&color=seagreen&style=for-the-badge&label=node%20badges
```

### GHCR Image Tags

[![Image Latest](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges/latest)](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges/latest)
[![Image Tags](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges)](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges)

`/ghcr/tags/{owner}/{pacakge}/latest`  
`/ghcr/tags/{owner}/{pacakge}`

Without `latest` it returns the `n` most recent tags, otherwise only the latest tag.

- https://badges.cssnr.com/ghcr/tags/smashedr/node-badges
- https://badges.cssnr.com/ghcr/tags/smashedr/node-badges/latest

The `n` [parameter](get-started.md#badge-specific) defaults to `3`, these are equivalent.

```text
https://badges.cssnr.com/ghcr/tags/smashedr/node-badges
https://badges.cssnr.com/ghcr/tags/smashedr/node-badges?n=3
```

You can also change the `sep` parameter, add `reversed` and filter by valid `semver` tags.

[![Image Tags](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges?labelColor=plum&lucide=activity&iconColor=black&color=paleturquoise&style=for-the-badge&label=last%20four&n=4&sep=-&reversed&semver)](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges?labelColor=plum&lucide=activity&iconColor=black&color=paleturquoise&style=for-the-badge&label=last%20four&n=4&sep=-&reversed&semver)

```text
https://badges.cssnr.com/ghcr/tags/smashedr/node-badges?labelColor=plum&lucide=activity&iconColor=black&color=paleturquoise&style=for-the-badge&label=last%20four&n=4&sep=-&reversed&semver
```

### VirusTotal Release and Files

[![VT Release](https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk)](https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk)

`/vt/id/{id}`  
`/vt/sha/{sha}`  
`/vt/{owner}/{repo}/{asset}`  
`/vt/{owner}/{repo}/{asset}/{tag}`

The `id` endpoint is used for VirusTotal File ID, and `sha` for a file hash/digest.

The `owner/repo/asset` endpoints use the latest/tagged release asset for the repository.

If the `tag` parameter is omitted, the release tagged as `latest` in GitHub is used.

For the repo [cssnr/zipline-android](https://github.com/cssnr/zipline-android/releases/latest)
and the release asset `app-release.apk` the URL would be:

```text
https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk
```

> [!NOTE]  
> This service does not upload the file to VirusTotal for analysis, it only fetches the result.  
> You can do this automatically with the [cssnr/virustotal-action](https://github.com/cssnr/virustotal-action) GitHub action.

### JSON/YAML JSONPath

[![App Image](https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Fdocker-compose-swarm.yaml/%24.services.app.image?lucide=container&label=image)](https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Fdocker-compose-swarm.yaml/%24.services.app.image?lucide=container&label=image)

`/json/{url}/{path}`  
`/yaml/{url}/{path}`

Both `url` and `path` are both [URL Encoded](https://www.urlencoder.org/).  
The `path` is a [JSONPath](https://jsonpath.com/).

This endpoint accepts `split` and `index`.

Example showing the redis version from this [docker-compose-swarm.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose-swarm.yaml#L60).

[![Redis Version](https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Fdocker-compose-swarm.yaml/%24.services.redis.image?split=:&index=1&lucide=database&label=redis)](https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Fdocker-compose-swarm.yaml/%24.services.redis.image?split=:&index=1&lucide=database&label=redis)

```text
https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Fdocker-compose-swarm.yaml/%24.services.redis.image?split=:&index=1&lucide=database&label=redis
```

_Note: the badge at the top is also from this [docker-compose-swarm.yaml](https://github.com/smashedr/node-badges/blob/master/docker-compose-swarm.yaml#L40) file._

### Static Badge

[![Cool Badge](https://intranet.cssnr.com/static/is%20cool/node-badges?lucide=badge-check)](https://intranet.cssnr.com/static/is%20cool/node-badges?lucide=badge-check)

`/static/{message}`  
`/static/{message}/{label}`

Create a static badge with a custom `message`.
The `label` can be optionally added after the message or in the query params.

&nbsp;

<!--@include: @include/wip.md-->
