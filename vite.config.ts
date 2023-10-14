import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@page', replacement: path.resolve(__dirname, 'src/page') },
			{ find: '@component', replacement: path.resolve(__dirname, 'src/component') },
			{ find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
			{ find: '@model', replacement: path.resolve(__dirname, 'src/model') },
			{ find: '@style', replacement: path.resolve(__dirname, 'src/style') },
			{ find: '@types', replacement: path.resolve(__dirname, 'src/types') },
    ]
  }
})
