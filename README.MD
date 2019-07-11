# RaiseJS Core
Kickstart your next project with a lightweight, yet powerful javascript base.

## For the average visitor :innocent:
### What is this? :boom:
This repo contains source code for RaiseJS/core, a JavaScript library to build lightweight frontend webapps.
Seeing the rapid growth in size of "modern" web applications, I decided to set this trend an end.
RaiseJS/core offers a great codebase which is easily expandable and forms the foundation of the RaiseJS ecosystem, seamlessly
integrating any other RaiseJS libraries into your new or existing project.

### What is RaiseJS? :ok_hand:
RaiseJS is an ecosystem of libraries, all relying on RaiseJS/core as foundation for expansion.
Grow beyond competition and watch your page load times shrink - not skyrocket.
We recommend setting up new, RaiseJS-based projects with RaiseJS/cli, a commmand-line interface allowing everybody
to quickly jump into a full-fledged development environment with a innovative folder structure and clear, leading-edge guidelines.

### How can I install this? :sunglasses:
It´s easy. Either setup your environment through our command-line interface @RaiseJS/cli, or go install this dependency via `yarn` or `npm`:
```
	npm install || yarn install
```
You can also build this repo from source by cloning the whole thing and running `npm run build` (or `yarn run build`).
Or, if you prefer the good old times or would like to test this tool first, dead-simply copy-paste your preferred variant from the `/js` folder of the root directory.

### What flavour do you prefer? :icecream:
In the `/js` folder of the repo root directory, you will find 4 files, all essentially containing the same essence.
While we do recommend using `min.poly.core.js` for production environments, here´s a description of all:
 * `core.js` This is the unminified, pure, yet uncommented source code. We do not recommend this for anybody!
 * `min.core.js` A minified `core.js` copy. This is useful for development environments. If you are using this in production, make sure to polyfill it manually!
 * `poly.core.js` Unminified, but polyfilled - Also not recommended
 * `min.poly.core.js` For production environments or professional projects: This is a minified, to *ES2017* compiled version of RaiseJS/core. We recommend this flavour.

## For the contributors :open_hands:
First of all, **thanks** for planning to contribute! :+1::+1::+1:
Open Source Projects do profit from new helpers, and there´s always something to fix or improve.
_Let´s get to work!_

### Cloning the repo
Okay, _really_? `git clone https://github.com/RaiseJS/core.git`

### Modifying the source
In the `/src` folder, you will find the one-and-only source of truth: `main.js`. :angel:
This code is then compiled into the `/js` to the library we all know and love :blush:
Make sure to comment all changes and, if necessary, change the [README.MD](README.MD) accordingly!

### Before commiting
Make sure you´ve tested the functionality of the source code by compiling it (`npm run build` / `yarn run build`)
and checking all tests in `/testing`. Additionally, if the Jest unit testing framework is already setup, run `npm run test`
and see if everything remains fine!

## Thanks for sticking around! Now build something great :heart:
