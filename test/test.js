const fs = require('fs');
const pngjs = require('pngjs');
const parser = require('../dist/asset-parser');

function writePNG(rawBitmap, width, height) {
	var png = new pngjs.PNG({ width, height });
	png.data = rawBitmap;
	return pngjs.PNG.sync.write(png);
}

function runTest(filename, expected) {
	console.log('Testing ' + filename);
	console.log('---------------------------------------------');
	var data = fs.readFileSync('./test/' + filename + '.sd');

	var result = parser.parseAssetBundle(data);
	console.assert(result.imageName == expected.name, '[' + filename + '] Unexpected image name');
	console.assert(result.sprites.length == expected.spriteCount, '[' + filename + '] Unexpected number of sprites');
	console.assert(result.imageBitmap.width == expected.width, '[' + filename + '] Incorrect image width');
	console.assert(result.imageBitmap.height == expected.height, '[' + filename + '] Incorrect image height');
	console.log('Test ' + filename + ' SUCCEEDED!');

	console.log('Writing PNG (' + filename + ' -> ' + result.imageName + '.png)\n');
	let pngImage = writePNG(result.imageBitmap.data, result.imageBitmap.width, result.imageBitmap.height);
	fs.writeFileSync('./test/' + result.imageName + '.png', pngImage);
}

// test portrait (Unity format 15)
runTest('test1', {
	name: 'cm_mirroruhura_icon',
	spriteCount: 0,
	width: 128,
	height: 128
});

// test portrait (Unity format 17)
runTest('test2', {
	name: 'cm_soji_asha_sm',
	spriteCount: 0,
	width: 256,
	height: 256
});

// test full image (Unity format 17)
runTest('test3', {
	name: 'cm_ezriwaitress_full',
	spriteCount: 0,
	width: 512,
	height: 1024
});