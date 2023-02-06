const fs = require('fs');

function text_to_json(file_path) {
  // const json_data = {};
  // const file = fs.readFileSync(file_path, 'utf8').toString().split('\n');

  let json_data = {};
  let file = fs.readFileSync(file_path, 'utf8').toString().split('\n');
  file.forEach((line, i) => {
    line = line.trim();

    if (line && !line.startsWith('#')) {
      let parts = line.split(' > ');
      let current_level = json_data;

      parts.forEach((part) => {
        let part_name = part.replace(/^\d+ - /gi, '');

        if (!current_level.hasOwnProperty(part_name)) {
          current_level[part_name] = {};
        }

        current_level.name = current_level[part_name];
        current_level.node = i;
        current_level.path = line;
        current_level.parent = current_level[part_name];
      });
    }
  });
  return JSON.stringify(json_data, null, 2);
}

function text_to_array(file_path) {
  let file = fs.readFileSync(file_path, 'utf8').toString().split('\n');
  let currentNode = 0;

  var m = file.map((line, i) => {
    line = line.replace(/\d+ -/, '').trim();

    if (!line.startsWith('#')) {
      let parts = line.split(' > ');
      let path = line;
      let name = parts[parts.length - 1];
      let parent = parts[parts.length - 2];

      if (!parent) {
        currentNode += 1;
      }

      return {
        name,
        parent,
        path,
        nodeid: currentNode,
      };

      // parts.forEach((part, index, arr) => {
      //   let name;

      // if (arr.length === 1) {
      //   // top node
      //   name = part;
      //   path = line;
      //   nodeid = i;
      //   data.push({ name, parent: currentParent, path: line, nodeid: i });
      //   return;
      // }

      // if (!currentParent && arr.length > 1) currentParent = part;

      // if (currentParent === part) {
      //   const idx = arr.indexOf(currentParent) + 1;

      //   if (arr.length > idx) {
      //     currentParent = arr[arr.indexOf(currentParent) + 1];
      //   }
      // }

      // if (index !== parts.length - 1) {
      //   path += ' > ';
      // }

      //   data.push({ name, parent: currentParent, path: line, nodeid: i });
      // });
    }
  });
  // return data;
  return m;
}

// const json_data = text_to_json('./google_prod_taxonomies.txt');
const json_data = text_to_array('./google_prod_taxonomies.txt');

fs.writeFileSync('prod_categories.json', JSON.stringify(json_data, 2));

console.log(json_data);

// [
//   {
//     nodeid: '1',
//     name: 'Animals & Pet Supplies',
//     parent: '',
//     path: 'Animals & Pet Supplies'
//   }, {
//     nodeid: '2',
//     name: 'Live Animals',
//     parent: '',
//     path: 'Animals & Pet Supplies > Live Animals'
//   }
// ]

// Animals & Pet Supplies > Pet Supplies
// Animals & Pet Supplies > Pet Supplies > Bird Supplies
// Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cage Accessories
// Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cage Accessories > Bird Cage Bird Baths
// Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cage Accessories > Bird Cage Food & Water Dishes
// Animals & Pet Supplies > Pet Supplies > Bird Supplies > Bird Cages & Stands
