# UnityFS AssetBundle Parser

This library is an extension/improvement of the work of user `IAmPicard` and the [`unitiyfs-asset-parser`](https://www.npmjs.com/package/unitiyfs-asset-parser) npm library.

It has been integrated within this project, as the npm module has no source code readily available.

`IAmPicard`'s introduction is as follows:

--------

UnityFS asset bundle parser in JavaScript, *without native modules*.

Code is loosely based on [UnityPack](https://github.com/HearthSim/UnityPack). Thanks for the inspiration!

**NOTE**: I've only tested this with a very limited number of assets of very specific formats. If you want to improve it, PRs are welcome.

My main goal was to be able to get this done entirely in JavaScript without a native module or any external processes. Should work in node.js, Electron / Cordova and plain browsers (with a Buffer polyfill).
