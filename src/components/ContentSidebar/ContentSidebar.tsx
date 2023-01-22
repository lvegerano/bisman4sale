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
  { name: 'Dashboard', href: '#', icon: CheckBadgeIcon, current: false }, // TODO: ONLY SHOW WHEN USER IS LOGGED IN
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
];

const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
];

type Props = {};

const ContentSidebar = (props: Props) => {
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
          <p className="px-3 text-sm font-medium text-gray-500" id="communities-headline">
            Communities
          </p>
          <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
            {communities.map((community) => (
              <a
                key={community.name}
                href={community.href}
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <span className="truncate">{community.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContentSidebar;
