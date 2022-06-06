const fs = require('fs');

try {
    fs.rmSync('./dist', { recursive: true });
} catch (error) {
    console.log('Failed to clean, continuing...');
}