#!/usr/bin/env -S just --justfile

# just doit -> "do what I mean"
doit: build

dev:
    hugo -D server

build:
    hugo --gc --minify

clean:
    rm -rf public
