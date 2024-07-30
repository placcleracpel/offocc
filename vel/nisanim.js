const fs = require('fs');

fs.writeFileSync('filename.html', "<head>\n", { flag: 'a' });
