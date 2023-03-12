import AppWrapper from '@components/AppWrapper';
import Dropdown from '@components/Dropdown';
import Input from '@components/Input';
import PriceInput from '@components/PriceInput';
import { Switch } from '@headlessui/react';
import { classNames } from '@utils/classnames';
import { GetServerSideProps } from 'next/types';
import { useEffect, useState } from 'react';
import { withSSRContext, API } from 'aws-amplify';
import * as queries from '@graphql/queries';
import CategoriesDropdown from '@components/CategoriesDropdown';

const priceOptions = [
  {
    label: 'Price',
    value: 'price',
  },
  {
    label: 'Contact Me',
    value: 'contact',
  },
  {
    label: 'Make An Offer',
    value: 'offer',
  },
  // TODO: NEED TO ADD MODEL TO SUPPORT MULTIPLE PRICES
  // {
  //   label: 'Multiple Prices',
  //   value: 'multiple',
  // },
];

const sectionDescriptions = {
  title: '',
  description: '',
  images: '',
};

type ICreateProps = {};

const Create = ({}: ICreateProps) => {
  const [categories, setCategories] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [priceOption, setPriceOption] = useState<string | number>('price');

  // useEffect(() => {
  //   const getCategories = async () => {
  //     const cats = await API.graphql({
  //       query: queries.listCategories(limit),
  //     });
  //   };
  // }, []);

  return (
    <AppWrapper showSidebar={false}>
      <div className="lg:col-span-12">
        <form className="space-y-6" action="#" method="POST">
          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
              <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Ad title"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Describe the item you are selling"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Add a detailed description of the item you're selling. URLs are hyperlinked.
                  </p>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Switch.Group as="div" className="flex items-center">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? 'bg-indigo-600' : 'bg-gray-200',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            enabled ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                      <Switch.Label as="span" className="ml-3">
                        <span className="text-sm font-medium text-gray-900">New</span>
                      </Switch.Label>
                    </Switch.Group>
                  </div>
                  <div className="col-span-6 sm:col-span-3"></div>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    {priceOption === 'price' && <PriceInput showLabel={false} />}
                    {priceOption === 'contact' && (
                      <Input
                        placeholder="Contact me for pricing"
                        showLabel={false}
                        disabled={true}
                      />
                    )}
                    {priceOption === 'offer' && (
                      <Input placeholder="Make me an offer" showLabel={false} disabled={true} />
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Dropdown
                      options={priceOptions}
                      selectedOption={priceOption}
                      setOption={setPriceOption}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <CategoriesDropdown />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </AppWrapper>
  );
};

export default Create;
