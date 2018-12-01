#!/usr/bin/env bash
export NODE_ENV=$ENV
pm2-runtime process.yml
