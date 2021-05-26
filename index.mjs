#!/usr/bin/env node --experimental-json-modules

import welcome from "cli-welcome";
import pkgJson from "./package.json";

welcome({
  title: pkgJson.name,
  tagLine: "Howdy, y'all!",
  description: pkgJson.description,
  version: pkgJson.version,
  clear: true,
  bold: true,
  bgColor: "#fad000",
  color: "#1e1e3f",
});

// console.log(
// `NAME: ${pkgJson.name}
// VERSION: ${pkgJson.version}
// DESC: ${pkgJson.description}`
// );

console.log(`MJ Wojcik

A very cool dude...
`);
