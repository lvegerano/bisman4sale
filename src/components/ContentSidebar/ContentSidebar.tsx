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
import { getBaseCategories } from '@utils/getBaseCategories';
import { Category } from 'src/API';

const navigation = [
  { name: 'Super Admin', href: '/management', icon: Cog8ToothIcon, current: false },
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Dashboard', href: '/user/2134', icon: CheckBadgeIcon, current: false }, // TODO: ONLY SHOW WHEN USER IS LOGGED IN
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
];

const seoSlug = (slug: string | undefined) => {
  if (!slug) return '';

  return slug
    .replace(/[^a-z0-9]|\s+/gim, ' ')
    .replace(/\s+/gim, '-')
    .toLowerCase();
};

type ContentSidebarProps = {
  categories?: Partial<Category>[];
};

const ContentSidebar = ({ categories }: ContentSidebarProps) => {
  const baseCategories = getBaseCategories();
  const topCategories = (categories || baseCategories).map((category) => ({
    ...category,
    href: `/${category?.nodeID}/${encodeURIComponent(seoSlug(category?.name))}`,
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
