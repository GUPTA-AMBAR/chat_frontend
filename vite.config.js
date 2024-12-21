import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const BURL = import.meta.env.BACKURL;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
		port: 5000,
		proxy: {
			"/api": {
				target: `${BURL}`,
			},
		},
	},
})
