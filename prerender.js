import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Обслуживание собранных файлов на 4173
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });

  // Ждем загрузки контента
  await page.waitForSelector('#root');

  // Получаем rendered HTML из #root
  const content = await page.evaluate(() => {
    return document.querySelector('#root').innerHTML;
  });

  // Читаем исходный HTML
  const originalHtml = fs.readFileSync(path.join(__dirname, 'docs', 'index.html'), 'utf8');

  // Заменяем <div id="root"></div> на <div id="root">${content}</div>
  const prerenderedHtml = originalHtml.replace('<div id="root"></div>', `<div id="root">${content}</div>`);

  // Сохраняем prerendered HTML
  fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), prerenderedHtml);

  await browser.close();

  console.log('Prerendered HTML сохранен в docs/index.html');
})();
