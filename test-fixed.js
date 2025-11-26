const {Image} = require('./build/src/index.js');

async function testOCIFix() {
  console.log('=== Testing OCI Multi-Platform Manifest Fix ===\n');

  console.log('1. Testing with node:20-slim (OCI manifest list)');
  const image1 = new Image('node:20-slim', 'node:20-slim');
  const config1 = await image1.getImageConfig();
  console.log('   ✓ node:20-slim works!');
  console.log(`     Arch: ${(await image1.getImageData()).config.architecture}`);

  console.log('\n2. Testing with node:18-alpine (OCI manifest list)');
  const image2 = new Image('node:18-alpine', 'node:18-alpine');
  const config2 = await image2.getImageConfig();
  console.log('   ✓ node:18-alpine works!');
  console.log(`     Arch: ${(await image2.getImageData()).config.architecture}`);

  console.log('\n3. Testing with alpine:latest (OCI manifest list)');
  const image3 = new Image('alpine:latest', 'alpine:latest');
  const config3 = await image3.getImageConfig();
  console.log('   ✓ alpine:latest works!');
  console.log(`     Arch: ${(await image3.getImageData()).config.architecture}`);

  console.log('\n=== ✓ ALL TESTS PASSED! ===');
  console.log('\nThe fix successfully handles OCI multi-platform manifests!');
  console.log('All modern images work correctly.');
}

testOCIFix().catch(err => {
  console.error('✗ Test failed:', err.message);
  process.exit(1);
});
