require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/bundle.js',
    plugins: []
  })
  .catch(() => process.exit(1))
