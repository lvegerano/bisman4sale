import AppWrapper from '@components/AppWrapper';
import { useForm } from 'react-hook-form';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import * as mutations from '../graphql/mutations';
import categories from '@utils/prod_categories.json';
import compCategories from '@utils/comp_categories.json';
import { FormEvent } from 'react';
import { CreateAdMutation, CreateCompCategoryMutation } from 'src/API';

type AddCategoryFormData = {
  category: string;
};

type Props = {};

const Management = (props: Props) => {
  const { register, handleSubmit } = useForm<AddCategoryFormData>();
  const onSubmit = handleSubmit(async (data) => {
    const { category } = data;
    const newCategory = await API.graphql({
      query: mutations.createCategory,
      variables: {
        input: {
          name: category,
        },
      },
    });
  });

  const seedCategories = async (obj: any, parentID: any = null) => {
    try {
      // console.log(obj);
      // obj.forEach(async (cat: any) => {
      //   const { name, parent, nodeid, path } = cat;
      // });
      for (const { name, parent, nodeid, path } of obj) {
        // console.log(name, parent, nodeid, path);
        try {
          await API.graphql({
            query: mutations.createCategory,
            variables: {
              input: {
                name: name.toLocaleLowerCase(),
                parent: parent.toLocaleLowerCase(),
                nodeID: nodeid,
                path: path.toLocaleLowerCase(),
              },
            },
          });
        } catch (e) {
          console.log('ERROR', name, parent, nodeid, path);
        }
      }
      // goo

      //   const { createCategory } = data;

      //   if (Object.keys(value).length) {
      //     await seedCategories(value, createCategory.id); // instead of res it should be the inserted key id
      //   }
      // }
    } catch (error) {
      console.error(error);
    }
  };

  let currentParent;
  const seedData = async (categories: { [key: string]: string[] }) => {
    console.log(categories);
    Object.entries(categories).forEach(async ([key, value]) => {
      const cat = await API.graphql<GraphQLQuery<CreateCompCategoryMutation>>({
        query: mutations.createCompCategory,
        variables: {
          input: {
            name: key,
          },
        },
      });

      value.forEach(async (childCat) => {
        await API.graphql<GraphQLQuery<CreateCompCategoryMutation>>({
          query: mutations.createCompCategory,
          variables: {
            input: {
              name: childCat,
              parent: cat.data.createCompCategory.id,
            },
          },
        });
      });

      await API.graphql<GraphQLQuery<CreateCompCategoryMutation>>({
        query: mutations.createCompCategory,
        variables: {
          input: {
            name: key,
          },
        },
      });

      console.log('category response', cat);
    });
  };

  const SeedData = async (e: FormEvent) => {
    e.preventDefault();
    // await seedCategories(categories);
    await seedData(compCategories);
  };

  return (
    <AppWrapper>
      <main className="lg:col-span-9 xl:col-span-6">
        <form onSubmit={onSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category Name
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('category')}
                      type="text"
                      name="category"
                      id="category"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <form onSubmit={SeedData}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Seed Categories
              </button>
            </div>
          </div>
        </form>
      </main>
    </AppWrapper>
  );
};

export default Management;
