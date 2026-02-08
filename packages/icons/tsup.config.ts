import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/icons/ui/index.ts', 'src/icons/brands/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  dts: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy',
  },
});
