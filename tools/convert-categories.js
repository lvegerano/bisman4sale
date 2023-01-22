const fs = require('fs');

function text_to_json(file_path) {
  // const json_data = {};
  // const file = fs.readFileSync(file_path, 'utf8').toString().split('\n');

  let json_data = {};
  let file = fs.readFileSync(file_path, 'utf8').toString().split('\n');
  file.forEach((line) => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      let parts = line.split(' > ');
      let current_level = json_data;
      parts.forEach((part) => {
        let part_name = part.replace(/^\d+ - /gi, '');
        if (!current_level.hasOwnProperty(part_name)) {
          current_level[part_name] = {};
        }
        current_level = current_level[part_name];
      });
    }
  });
  return JSON.stringify(json_data, null, 2);
}

const json_data = text_to_json('./google_prod_taxonomies.txt');

fs.writeFileSync('prod_categories.json', JSON.stringify(json_data, 2));

console.log(json_data);
