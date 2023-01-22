const categories = require('./prod_categories.json');
const { API } = require('aws-amplify');
const mutations = require('../src/graphql/mutations')

console.log('top categories', Object.keys(JSON.parse(categories)));

function insertRecord(categoryName) {

}

let currentParentId
Object.keys(JSON.parse(categories).forEach((topCatecorgy) => {

});
