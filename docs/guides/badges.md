# Badges

[[toc]]

::: info Badge Generator
Make sure to check out the [Badge Generator](get-started.md)
:::

## GHCR Image Size

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

## GHCR Image Tags

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

## VirusTotal Release and Files

[![VT Hash](https://badges.cssnr.com/vt/sha/sha256:d54fd9a93f2aa25b5c95128f84de1a624783ded6e66554c12a5ffd07546146e4)](https://badges.cssnr.com/vt/sha/sha256:d54fd9a93f2aa25b5c95128f84de1a624783ded6e66554c12a5ffd07546146e4)
[![VT Release](https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk)](https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk)

`/vt/id/{id}`  
`/vt/{owner}/{repo}/{asset}`  
`/vt/{owner}/{repo}/{asset}/{tag}`

::: warning
Going forward you **need** to use the file hash: `SHA-256`, `SHA-1` or `MD5`.  
File ID's (which end with `==`) consume API calls where hashes do not.  
You **MUST** also update the endpoint to: `/vt/id/{hash}`  
File ID's will continue to work for existing badges; however, DO NOT ADD MORE!
:::

- https://badges.cssnr.com/vt/id/sha256:d54fd9a93f2aa25b5c95128f84de1a624783ded6e66554c12a5ffd07546146e4
- https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk
- https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk/1.0.29

The `hash` is the file's `SHA-256`, `SHA-1` or `MD5`. The prefix is optional and can be `sha256:xxxx` or just `xxxx`.

The `owner/repo/asset` endpoints use the latest/tagged release asset for the repository.

If the `tag` parameter is omitted, the release tagged as `latest` in GitHub is used.

For the repo [cssnr/zipline-android](https://github.com/cssnr/zipline-android/releases/latest)
and the release asset `app-release.apk` the URL would be:

```text
https://badges.cssnr.com/vt/cssnr/zipline-android/app-release.apk
```

The color of the badge is automatically determined based on the number of malicious+suspicious reports.

The default is `#44cc11` (brightgreen) to `#e05d44` (red) with `8` colors. Meaning 0 detections will be brightgreen
and 8+ red. But `1-7` would be a color somewhere between brightgreen and red.

The `start` color `end` color and total `n` number of colors can be specified with query parameters.

This uses [gka/chroma.js](https://github.com/gka/chroma.js) which accepts hex codes or css colors,
but **not** [badge-maker](https://www.npmjs.com/package/badge-maker) named colors.

There is currently a color tester at `/color/N`. This will produce a color between red and green.

```text
https://badges.cssnr.com/colors/4?start=green&end=red&n=8
```

<details><summary>View Color Generation Code</summary>

```javascript
function getRangedColor(req, index, options = {}) {
  const opts = { total: 8, start: '#44cc11', end: '#e05d44', ...options }
  opts.total = Number.parseInt(req.query.n || opts.total)
  opts.start = req.query.start || opts.start
  opts.end = req.query.end || opts.end
  const colors = chroma
    .scale([opts.start, opts.end])
    .mode('lab')
    .colors(opts.total + 1)
  const idx = Math.max(0, Math.min(opts.total, index))
  return colors[idx]
}
```

</details>

> [!NOTE]  
> This service does not upload the file to VirusTotal for analysis, it only fetches the result.  
> You can do this automatically with the [cssnr/virustotal-action](https://github.com/cssnr/virustotal-action) GitHub action.

## JSON/YAML JSONPath

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

## Static Badge

[![Cool Badge](https://badges.cssnr.com/static/is%20cool/node-badges?lucide=badge-check)](https://badges.cssnr.com/static/is%20cool/node-badges?lucide=badge-check)

`/static/{message}`  
`/static/{message}/{label}`

Create a static badge with a custom `message`.
The `label` can be optionally added after the message or in the query params.

&nbsp;

<!--@include: @include/wip.md-->
