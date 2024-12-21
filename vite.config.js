// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv';


// dotenv.config();

// const BURL = process.env.VITE_BACKURL;
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   server: {
// 		port: 5000,
// 		proxy: {
// 			"/api": {
// 				target: BURL,
// 				changeOrigin: true,
// 			},
// 		},
// 	},
// })







import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const BURL = process.env.BACKURL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: BURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Rewrite '/api' to match the backend's endpoint.
      },
    },
  },
});
