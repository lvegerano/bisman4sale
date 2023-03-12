import AppWrapper from '@components/AppWrapper';
import Link from 'next/link';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
];

type Props = {};

const Dashboard = () => {
  return (
    <AppWrapper showSidebar={false}>
      <div className="col-span-6 sm:mt-4">
        <section aria-labelledby="profile-overview-title">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <h2 className="sr-only" id="profile-overview-title">
              Profile Overview
            </h2>
            <div className="bg-white p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-5">
                  <div className="flex-shrink-0">
                    <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center sm:mt-0">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    View profile
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-5 text-center text-sm font-medium">
                  <span className="text-gray-900">{stat.value}</span>{' '}
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="col-span-6 sm:mt-4">
        <section aria-labelledby="ads-overview-title">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <h2 className="sr-only" id="ads-overview-title">
              Ads Overview
            </h2>
            <div className="bg-white p-6">
              <div>
                <h1>My Ads</h1>
                <Link
                  href="/user/2134/ad"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  New Ad
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppWrapper>
  );
};

export default Dashboard;
