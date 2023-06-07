import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
//@ts-ignore
import checker from 'vite-plugin-checker';
import fs from 'fs'

const kotlinDir = '../../kotlin';

function getKotlinPackages() {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(kotlinDir, { withFileTypes: true }, (err, entries) => {
      if (err) {
        reject(err);
        return;
      }

      const kotlinPackages = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name);

      resolve(kotlinPackages);
    });
  });
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const kotlinPackages = await getKotlinPackages()
  return {
    plugins: [
      react({
        //exclude stories and kotlin files
        exclude: [/\.stories\.(t|j)sx?$/],
      }),
      checker({
        typescript: true
      }),
      tsconfigPaths(),
      svgr()
    ],
    optimizeDeps: {
      include: kotlinPackages,
    },
    build: {
      commonjsOptions: {
        include: [
          /node_modules/,
          /kotlin/,
        ]
      }
    }
  }
})
