import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Netlify provides environment variables during build time
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.TELEGRAM_BOT_TOKEN': JSON.stringify(process.env.TELEGRAM_BOT_TOKEN),
    'process.env.TELEGRAM_CHAT_ID': JSON.stringify(process.env.TELEGRAM_CHAT_ID),
    'process.env.GOOGLE_SHEETS_WEBHOOK_URL': JSON.stringify(process.env.GOOGLE_SHEETS_WEBHOOK_URL),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  },
});
