---
pageClass: render-page
---

# Render

You can deploy your own instance to Render and run it 24/7 for free.

You can optionally use a custom domain or use the free `onrender` subdomain.

[[toc]]

## 1. Create a Free Render Account

Register your account on Render.

- https://dashboard.render.com/register

## 2. Deploy to Render

[![Deploy to Render](https://img.shields.io/badge/Deploy_to_Render-4351E8?style=for-the-badge&logo=render)](https://render.com/deploy?repo=https://github.com/smashedr/node-badges)

This will deploy the [render.yaml](https://github.com/smashedr/node-badges/blob/master/render.yaml) from this repo.

## 3. Add Optional Environment Variables

All [environment variables](./deploy.md#environment-variables) are optional but some services have required [API Keys](./deploy.md#api-keys).

::: details View Environment Screenshot
[![Env](/images/render/environment.jpg)](/images/render/environment.jpg)
:::

## 4. Add Monitoring Service

This step is **required** to keep your **free** service online 24/7.
If you have a paid account, this is optional.

1. Copy your render service URL from the dashboard.

Example: `https://node-badges.onrender.com/`

2. Create an Uptime Robot account

https://dashboard.uptimerobot.com/sign-up

3. Add a New monitor.

It should check the site at least every 10 minutes because
Render shuts your instance down after 15 minutes of inactivity.

For best performance, you should monitor the health check endpoint `/app-health-check` which only returns a 200.

Example: `https://node-badges.onrender.com/app-health-check`
