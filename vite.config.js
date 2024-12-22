// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'
// // import dotenv from 'dotenv';


// // dotenv.config();

// // const BURL = process.env.VITE_BACKURL;
// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],

// //   server: {
// // 		port: 5000,
// // 		proxy: {
// // 			"/api": {
// // 				target: BURL,
// // 				changeOrigin: true,
// // 			},
// // 		},
// // 	},
// // })






// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'

// dotenv.config()

// const BURL = process.env.VITE_BACKURL

// export default defineConfig({
//   plugins: [react()],
//   base: "./",
//   server: {
//     port: 5000,
//     proxy: {
//       "/api": {
//         target: BURL, // Ensure this points to your backend URL
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// The backend URL (ensure this is set in your environment)
const BURL = process.env.VITE_BACKURL

export default defineConfig({
  plugins: [react()],
  
  // Ensuring Vite works well for production
  base: "/",

  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: BURL,  // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // Build-specific configuration
  build: {
    outDir: "dist",  // Output folder for production build
    sourcemap: true, // Enable sourcemaps for debugging
  },
})

