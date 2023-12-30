#!/usr/bin/env zx

process.env.FORCE_COLOR='1'

await $`pnpm astro build`
await $`pnpm sass --no-source-map --style=compressed src/styles/style.scss:dist/style/style.min.css`
