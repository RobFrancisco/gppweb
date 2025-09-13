// check-import-case.js
// Scans your project for case mismatches between imports and actual file names

const fs = require('fs');
const path = require('path');
const {glob} = require('glob');

function getActualFileName(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  const files = fs.readdirSync(dir);
  return files.find(f => f.toLowerCase() === base.toLowerCase());
}

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /import\s+.*?from\s+['"](.*?)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    if (
      importPath.startsWith('.') && // local file
      !importPath.endsWith('.css') && // skip CSS
      !importPath.startsWith('./node_modules')
    ) {
      const resolved = path.resolve(path.dirname(file), importPath);
      const withExt = fs.existsSync(resolved)
        ? resolved
        : ['.js', '.jsx', '.ts', '.tsx'].map(ext => resolved + ext).find(fs.existsSync);

      if (withExt) {
        const actualName = getActualFileName(withExt);
        if (actualName && path.basename(withExt) !== actualName) {
          console.log(`⚠ Case mismatch in ${file}`);
          console.log(`   Import: ${importPath}`);
          console.log(`   Actual: ${actualName}`);
        }
      }
    }
  }
}

glob('**/*.{js,jsx,ts,tsx}', { ignore: 'node_modules/**' }, (err, files) => {
  if (err) throw err;
  files.forEach(checkFile);
});