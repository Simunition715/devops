import fs = require('fs');
import path = require('path');


const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentPath = path.join(process.cwd(), 'ui', 'components', componentName);

// Check if the component already exists
if (fs.existsSync(componentPath)) {
  console.error(`Component "${componentName}" already exists.`);
  process.exit(1);
}

// Create the component directory
fs.mkdirSync(componentPath, { recursive: true });

// Create component files
fs.copyFileSync(path.join(process.cwd(), 'templates', 'component.tsx'), path.join(componentPath, `${componentName}.tsx`));
fs.copyFileSync(path.join(process.cwd(), 'templates', 'style.scss'), path.join(componentPath, `${componentName}.scss`));

console.log(`Component "${componentName}" created successfully at ${componentPath}.`);
