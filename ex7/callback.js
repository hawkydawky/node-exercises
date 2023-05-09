const fs = require('fs');

const file = "file.txt";
const data = "Lorem ipsum dolor sit amet";

fs.writeFile(file, data, (err) => {
  if (err) throw err;
  console.log(`File ${file} has been saved.`);
});
