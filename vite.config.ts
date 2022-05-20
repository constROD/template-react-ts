import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

dotenv.config();

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        svgrOptions: {
          icon: true,
        },
      }),
      viteCompression({
        verbose: false,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        verbose: true,
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      ViteEjsPlugin(() => {
        return {
          APP_ZONE: process.env.APP_ZONE,
        };
      }),
    ],
    base: '/',
    server: {
      port: Number(process.env.PORT),
    },
    preview: {
      port: 8080,
    },
    build: {
      outDir: 'build',
      reportCompressedSize: false,
      sourcemap: false,
    },
    define: {
      // handle env variables here since import.meta conflicts with jest
      'process.env.MODE': `"${mode}"`,
      'process.env.APP_ZONE': `"${process.env.APP_ZONE}"`,
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }),
        ],
      },
    },
  });
};
