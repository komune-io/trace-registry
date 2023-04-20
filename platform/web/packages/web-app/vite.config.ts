import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
const fs = require('fs');

const kotlinDir = '../../kotlin';
let kotlinPackages = []

fs.readdir(kotlinDir, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error(err);
    return;
  }
  
  kotlinPackages = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
  
  console.log(kotlinPackages);
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      //exclude stories and kotlin files
      exclude: [/\.stories\.(t|j)sx?$/, /(?=.*kotlin)(?=.*js).*/],
    }),
    tsconfigPaths(),
    svgr()
  ],
  optimizeDeps: {
    include: kotlinPackages,
  },
})
