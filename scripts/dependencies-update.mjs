#!/usr/bin/env zx

const { dependencies, devDependencies } = require('../package.json')

const packages = Object.keys(dependencies)
const devPackages = Object.keys(devDependencies)

// @ts-ignore
await $`cd .. && yarn add ${packages}`
// @ts-ignore
await $`cd .. && yarn add --dev ${devPackages}`

