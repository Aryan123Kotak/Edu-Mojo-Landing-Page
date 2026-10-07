import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'team-photo-uploader',
      configureServer(server) {
        server.middlewares.use('/api/upload-team-photo', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const { dataUrl } = JSON.parse(body);
                if (dataUrl) {
                  const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                  const buffer = Buffer.from(base64Data, 'base64');
                  const publicDir = path.resolve(__dirname, 'public');
                  const imagesDir = path.join(publicDir, 'images');
                  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
                  fs.writeFileSync(path.join(publicDir, 'image.png'), buffer);
                  fs.writeFileSync(path.join(imagesDir, 'team_photo.png'), buffer);
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: '/images/team_photo.png' }));
                  return;
                }
              } catch (e) {
                console.error('Error saving photo:', e);
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to save photo' }));
            });
          } else {
            res.writeHead(405).end();
          }
        });

        server.middlewares.use('/api/upload-principal-photo', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const { id, filename, dataUrl } = JSON.parse(body);
                if (id && dataUrl) {
                  const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                  const buffer = Buffer.from(base64Data, 'base64');
                  const publicDir = path.resolve(__dirname, 'public');
                  const principalsDir = path.join(publicDir, 'images', 'principals');
                  if (!fs.existsSync(principalsDir)) fs.mkdirSync(principalsDir, { recursive: true });
                  fs.writeFileSync(path.join(principalsDir, `${id}.png`), buffer);
                  if (filename) {
                    fs.writeFileSync(path.join(principalsDir, filename), buffer);
                    fs.writeFileSync(path.join(publicDir, filename), buffer);
                  }
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: `/images/principals/${id}.png` }));
                  return;
                }
              } catch (e) {
                console.error('Error saving principal photo:', e);
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to save principal photo' }));
            });
          } else {
            res.writeHead(405).end();
          }
        });

        server.middlewares.use('/api/upload-school-logo', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const { id, filename, dataUrl } = JSON.parse(body);
                if (id && dataUrl) {
                  const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                  const buffer = Buffer.from(base64Data, 'base64');
                  const publicDir = path.resolve(__dirname, 'public');
                  const schoolsDir = path.join(publicDir, 'images', 'schools');
                  if (!fs.existsSync(schoolsDir)) fs.mkdirSync(schoolsDir, { recursive: true });
                  fs.writeFileSync(path.join(schoolsDir, `${id}.png`), buffer);
                  if (filename) {
                    fs.writeFileSync(path.join(schoolsDir, filename), buffer);
                    fs.writeFileSync(path.join(publicDir, filename), buffer);
                  }
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: `/images/schools/${id}.png` }));
                  return;
                }
              } catch (e) {
                console.error('Error saving school logo:', e);
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to save school logo' }));
            });
          } else {
            res.writeHead(405).end();
          }
        });
      },
    },
  ],
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
  optimizeDeps: {
    include: ['lucide-react', 'react', 'react-dom'],
  },
});

