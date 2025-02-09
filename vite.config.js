// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { viteStaticCopy } from 'vite-plugin-static-copy';

// export default defineConfig({
//   plugins: [
//     react(),
//     viteStaticCopy({
//       targets: [
//         {
//           src: 'src/assets/3d/*.glb', // Path to your .glb files
//           dest: 'assets/3d',          // Output directory in the build
//         },
//       ],
//     }),
//   ],
//   assetsInclude: ['**/*.glb'], // Add this to handle .glb files
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Ensure proper path aliasing
//       '@': '/src',
//     },
//   },
// });

