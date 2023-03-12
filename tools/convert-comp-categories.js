const fs = require('fs');

const cats = [
  {
    label: 'Agricultural',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Ag Trailers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Application Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Cattle',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Harvesting Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Hay Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Hay/Feed/Seed',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Horse Tack',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Horses',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Livestock Equip.',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Misc. Ag Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Other Livestock',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Planting/Tillage Equip.',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Property',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rentals',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Stock Trailers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Tires',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Tractors',
    isParent: false,
  },
  {
    label: 'Automobiles',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Cars',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Classics',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Commercial Vehicles',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Parts & Accessories',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Pick-ups',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rentals',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Repairables',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;SUVs/Crossovers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Tires & Rims',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Trailers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Vans',
    isParent: false,
  },
  {
    label: 'Commercial Supply',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Industrial Supply',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Janitorial',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Miscellaneous',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Office Furniture',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Oilfield',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Restaurant Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Retail Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Retail Furniture',
    isParent: false,
  },
  {
    label: 'Community',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Church Events',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Community Events',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Fund Raisers & Benefits',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Music & Entertainment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;School Events',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Sports',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Theatre',
    isParent: false,
  },
  {
    label: 'Electronics',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Cameras',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Car Audio',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Computers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;GPS Navigation',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Home Audio/Video',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Miscellaneous',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Movies and Music',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;MP3 & iPod Players',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Phones and Acc.',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Printers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Smart Home Devices',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Tablets and E-Readers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;TVs',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Two-Way Radios',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Video Games',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Wearable Technology',
    isParent: false,
  },
  {
    label: 'Employment',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Accounting / Finance',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Administrative',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Business Opportunities',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Child Care Staff',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Construction',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Customer Service',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Drivers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Education / Training',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Engineering / Architect',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Farm and Ranch',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;General',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Healthcare',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Management',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Marketing / Advertising',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Mechanics',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Non-Profit / Volunteer',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Oilfield Jobs',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Professional',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Restaurant / Bar',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Sales',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Skilled Labor',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Technology',
    isParent: false,
  },
  {
    label: 'Food',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Baked Goods',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Canned Goods',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Dairy',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Meat',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Other',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Produce',
    isParent: false,
  },
  {
    label: 'Garage Sale / Auctions',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Auctions',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Garage Sales',
    isParent: false,
  },
  {
    label: 'Health & Beauty',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Alternative Medicine',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Beauty Supplies',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Exercise Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Medical Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Optical',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Salon & Spa',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Supplements',
    isParent: false,
  },
  {
    label: 'Heavy Equipment',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Heavy Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Heavy Trailers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Heavy Truck',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Lifts',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Misc Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rentals',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Semi Truck',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Skidsteer/Forklift',
    isParent: false,
  },
  {
    label: 'Household',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Appliances',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Building Supplies',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Furniture',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Home Decor',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Hot Tubs / Saunas',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Kitchen & Dining',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rentals',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Table Games',
    isParent: false,
  },
  {
    label: 'Lawn & Garden',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Fertilizers / Pesticides',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Furniture',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Grills',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Lawn & Garden Tools',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Mowers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Other',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Outdoor Decor',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Pools',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Sheds',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Snowblowers',
    isParent: false,
  },
  {
    label: 'Merchandise',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Antiques',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Baby Items',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Books',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Clothing',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Collectibles',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;College Books',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Crafts',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Home School Supplies',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Jewelry',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Lost and Found',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Miscellaneous',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Musical',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rentals',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Seasonal',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Tickets / Gift Cards',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Tools',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Toys',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Wedding Merchandise',
    isParent: false,
  },
  {
    label: 'Pets',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Birds',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Cats',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Dogs',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Ferrets',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Fish',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Lost and Found',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Other',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rabbits',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Reptiles',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Supply/Accessories',
    isParent: false,
  },
  {
    label: 'Real Estate',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Business For Sale',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Condo/Townhomes',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Houses',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Industrial/Commercial',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Investment Property',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Lake / Vacation',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Lots',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Manufactured Homes',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Time Shares',
    isParent: false,
  },
  {
    label: 'Real Estate Rentals',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Apartments',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Duplexes',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Houses',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Industrial/Commercial',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Other',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rooms',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Storage Units',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Vacation',
    isParent: false,
  },
  {
    label: 'Recreational',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Archery',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;ATVs',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Aviation',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Bikes & Equipment',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Boats',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Campers',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Camping/Hiking Equip.',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Clothing / Helmets',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Firewood',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Fishing',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Golf & Supplies',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Guns',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Hunting Supplies',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Ice/Sportsman Houses',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Miscellaneous',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Motorcycles',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Motorhomes',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Paintball',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;RC/Drones',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Rentals',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Snow Toys',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Snowmobiles',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Sporting Goods',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Water Toys',
    isParent: false,
  },
  {
    label: 'Services',
    isParent: true,
  },
  {
    label: '&nbsp;&nbsp;Agriculture Services',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Automotive & Rec Services',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Care Services',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Home Services',
    isParent: false,
  },
  {
    label: '&nbsp;&nbsp;Other Services',
    isParent: false,
  },
];

let currentParent;

function convert() {
  return cats.reduce((acc, cat) => {
    if (cat.isParent && !acc[cat.label]) {
      acc[cat.label] = [];
      currentParent = cat.label;
      return acc;
    }

    acc[currentParent].push(cat.label.replaceAll(/(?:&nbsp;)/gi, ''));

    return acc;
  }, {});
}

const json = convert();

fs.writeFileSync('comp_categories.json', JSON.stringify(json, 2));
