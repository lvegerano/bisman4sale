import AppWrapper from '@components/AppWrapper';
import { useForm } from 'react-hook-form';
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import categories from '@utils/prod_categories.json';
import { FormEvent } from 'react';

type AddCategoryFormData = {
  category: string;
};

type Props = {};

const management = (props: Props) => {
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
    const query = /* GraphQL*/ `
      mutation CreateCategory(
        $input: CreateCategoryInput!
        $condition: ModelCategoryConditionInput
      ) {
        createCategory(input: $input, condition: $condition) {
          id
          parentID
          name
        }
      }
    `;
    try {
      for (const [key, value] of Object.entries(obj)) {
        const { data } = await API.graphql({
          query,
          variables: {
            input: {
              name: key,
              parentID,
            },
          },
        });

        const { createCategory } = data;

        if (Object.keys(value).length) {
          await seedCategories(value, createCategory.id); // instead of res it should be the inserted key id
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SeedData = async (e: FormEvent) => {
    e.preventDefault();
    await seedCategories(JSON.parse(categories));
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
        {/* <form onSubmit={SeedData}>
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
        </form> */}
      </main>
    </AppWrapper>
  );
};

export default management;
