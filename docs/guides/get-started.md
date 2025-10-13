---
prev:
  text: 'Get Help'
  link: '/support'
---

# Get Started

[![Image Size](https://badges.cssnr.com/ghcr/size/smashedr/node-badges)](https://badges.cssnr.com/ghcr/size/smashedr/node-badges)
[![Image Latest](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges/latest)](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges/latest)
[![Image Tags](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges)](https://badges.cssnr.com/ghcr/tags/smashedr/node-badges)
[![YAML Command](https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Frender.yaml/%24.services%5B0%5D.dockerCommand?label=run)](https://badges.cssnr.com/yaml/https%3A%2F%2Fraw.githubusercontent.com%2Fsmashedr%2Fnode-badges%2Frefs%2Fheads%2Fmaster%2Frender.yaml/%24.services%5B0%5D.dockerCommand?label=run)

Edit the URL or add query [Parameters](#parameters), then click outside the box to see the changes.

<BadgePreview   />

[JSONPath Explorer](https://jsonpath.com/)

## Parameters

These parameters are available for **all** badges.

| Parameter    | Default&nbsp;Param&nbsp;Value | Description&nbsp;of&nbsp;the&nbsp;Parameter                 |
| :----------- | :---------------------------: | :---------------------------------------------------------- |
| `style`      |            `flat`             | `plastic`, `flat`, `flat-square`, `for-the-badge`, `social` |
| `color`      |         `brightgreen`         | Badge Background Color (right side)                         |
| `label`**¹** |        badge specific         | Label Text (left side)                                      |
| `labelColor` |            `#555`             | Label Background Color (left side)                          |
| `icon`**¹**  |        badge specific         | Name of a [Simple Icon](https://simpleicons.org/)           |
| `lucide`     |        badge specific         | Name of a [Lucide Icon](https://lucide.dev/icons/)          |
| `iconColor`  |            `#fff`             | Icon Color                                                  |

> **¹** Allowed Empty. Set to an empty value to remove it from the badge.

For more details see the documentation for the related library, [badge-maker](https://www.npmjs.com/package/badge-maker).

## Badge Specific

These parameters are specific to certain badges.

| Parameter  | Example | Description&nbsp;of&nbsp;the&nbsp;Parameter                                      |
| :--------- | :-----: | :------------------------------------------------------------------------------- |
| `n`        |   `3`   | Number of items to include in the badge.                                         |
| `sep`      |  `\|`   | List item seperator where applicable.                                            |
| `semver`   |    -    | Filter items by valid [semantic](https://www.npmjs.com/package/semver) versions. |
| `reversed` |    -    | Reverse the order of returned items.                                             |
| `split`    |    -    | Split the item at the delimiter.                                                 |
| `index`    |   `0`   | Index of item after splitting.                                                   |

<!--@include: @include/wip.md-->
