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







import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

const BURL = process.env.VITE_BACKURL

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct relative paths in production
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: BURL,
        changeOrigin: true,
      },
    },
  },
})
