import {
  HomeIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon,
  Cog8ToothIcon,
} from '@heroicons/react/20/solid';
import { classNames } from 'src/utils/classnames';
import React from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Super Admin', href: '/management', icon: Cog8ToothIcon, current: false },
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Dashboard', href: '/2134/dashboard', icon: CheckBadgeIcon, current: false }, // TODO: ONLY SHOW WHEN USER IS LOGGED IN
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
];

const categories = [
  { name: 'Animals & Pet Supplies', path: 'Animals & Pet Supplies', nodeid: 1 },
  { name: 'Apparel & Accessories', path: 'Apparel & Accessories', nodeid: 2 },
  { name: 'Arts & Entertainment', path: 'Arts & Entertainment', nodeid: 3 },
  { name: 'Baby & Toddler', path: 'Baby & Toddler', nodeid: 4 },
  { name: 'Business & Industrial', path: 'Business & Industrial', nodeid: 5 },
  { name: 'Cameras & Optics', path: 'Cameras & Optics', nodeid: 6 },
  { name: 'Electronics', path: 'Electronics', nodeid: 7 },
  { name: 'Food, Beverages & Tobacco', path: 'Food, Beverages & Tobacco', nodeid: 8 },
  { name: 'Furniture', path: 'Furniture', nodeid: 9 },
  { name: 'Hardware', path: 'Hardware', nodeid: 10 },
  { name: 'Health & Beauty', path: 'Health & Beauty', nodeid: 11 },
  { name: 'Home & Garden', path: 'Home & Garden', nodeid: 12 },
  { name: 'Luggage & Bags', path: 'Luggage & Bags', nodeid: 13 },
  { name: 'Mature', path: 'Mature', nodeid: 14 },
  { name: 'Media', path: 'Media', nodeid: 15 },
  { name: 'Office Supplies', path: 'Office Supplies', nodeid: 16 },
  { name: 'Religious & Ceremonial', path: 'Religious & Ceremonial', nodeid: 17 },
  { name: 'Sporting Goods', path: 'Sporting Goods', nodeid: 19 },
  { name: 'Toys & Games', path: 'Toys & Games', nodeid: 20 },
  { name: 'Vehicles & Parts', path: 'Vehicles & Parts', nodeid: 21 },
];

const seoSlug = (slug: string) => {
  return slug
    .replace(/[^a-z0-9]|\s+/gim, ' ')
    .replace(/\s+/gim, '-')
    .toLowerCase();
};

type Props = {};

const ContentSidebar = (props: Props) => {
  const topCategories = categories.map((category) => ({
    ...category,
    href: `/${encodeURIComponent(seoSlug(category.name))}`,
  }));

  return (
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
        <div className="space-y-1 pb-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              className={classNames(
                item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
              )}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="pt-10">
          <p className="px-3 text-sm font-medium text-gray-500" id="categories-headline">
            Categories
          </p>
          <div className="mt-3 space-y-2" aria-labelledby="categories-headline">
            {topCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <span className="truncate">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContentSidebar;
