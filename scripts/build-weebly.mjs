import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const jsonPath = path.join(root, 'content-config.json');
const themeDir = path.join(root, 'weebly-theme');

const config = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

function getJsonValue(obj, pathStr) {
  const parts = pathStr.split('.');
  let current = obj;
  for (const p of parts) {
    if (current && typeof current === 'object' && p in current) {
      current = current[p];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : JSON.stringify(current);
}

function replaceMarkers(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const updated = [];

  for (const line of lines) {
    const m = line.match(/<!--@@(.+?)@@-->/);
    if (!m) {
      updated.push(line);
      continue;
    }
    const marker = m[1];
    const value = getJsonValue(config, marker);
    if (value !== undefined) {
      updated.push(line.replace(/<!--@@.+?@@-->/g, value));
    } else {
      console.warn(`Marker '${marker}' not found in config.`);
      updated.push(line);
    }
  }

  fs.writeFileSync(filePath, updated.join('\n'), 'utf8');
}

const htmlFiles = fs.readdirSync(themeDir).filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
  replaceMarkers(path.join(themeDir, file));
}

// copy logo if needed
const logoSrc = path.join(root, 'public', 'logo-myelektra.png');
const logoDest = path.join(themeDir, 'logo-myelektra.png');
if (fs.existsSync(logoSrc) && !fs.existsSync(logoDest)) {
  fs.copyFileSync(logoSrc, logoDest);
}

console.log('Weebly theme build complete ✅');