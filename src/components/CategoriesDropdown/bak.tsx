import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { API } from 'aws-amplify';
import cn from 'classnames';
import { Fragment, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { CategoriesByNodeQuery, Category, ListCategoriesQuery } from 'src/API';
import * as queries from '../../graphql/queries';
import { useDebounce } from 'use-debounce';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
// import { Category } from 'src/models';

// type Props = {};

const categories = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
];

async function fetchServerPage(
  limit: number,
  offset = 0
): Promise<{ rows: string[]; nextOffset: number }> {
  console.log('getting more');
  const rows = new Array(limit).fill(0).map((e, i) => `Async loaded row #${i + offset * limit}`);

  await new Promise((r) => setTimeout(r, 500));

  return { rows, nextOffset: offset + 1 };
}

const CategoriesDropdown = () => {
  // const [node, setNode] = useState(1);
  // const [categories, setCategories] = useState<(Category | null)[] | undefined>();
  // const [loadingCategories, setLoadingCategories] = useState(false);
  // const [query, setQuery] = useState('');
  // const [queryValue] = useDebounce(query, 1000);
  // const [filteredCategories, setFilteredCategories] = useState<ListCategoriesQuery | undefined>();

  // const getCategoriesByNode = async ({ node = 1 }: { node: number }) => {
  //   const res = (await API.graphql({
  //     query: queries.categoriesByNode,
  //     variables: {
  //       nodeID: node,
  //       sortDirection: 'ASC',
  //     },
  //   })) as { data: CategoriesByNodeQuery };

  //   setCategories(res.data.categoriesByNode?.items);
  // };

  // const isLoading = false;

  // const { data, isLoading } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: getCategoriesByNode,
  // });

  // const { status, data, isFetching } = useInfiniteQuery<CategoriesByNodeQuery, number>(
  //   ['categories'],
  //   getCategoriesByNode,
  //   {
  //     getNextPageParam: (lp) => {
  //       console.log('lp', lp);
  //       return false;
  //     },
  //   }
  // );

  // const defaultValue = {
  //   name: 'Select a category',
  // } as Category;

  // const containerRef = useRef(null);

  // const preventKeys = (e: KeyboardEvent) => {
  //   const allowableKeys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Enter'];
  //   if (!allowableKeys.includes(e.code)) {
  //     e.stopPropagation();
  //   }
  // };

  // const allRows = data ? data.pages.flatMap((d) => d) : [];

  // // console.log('allrows', allRows);

  // const categoryVirtualizer = useVirtualizer({
  //   count: allRows.length + 1,
  //   getScrollElement: () => containerRef.current,
  //   estimateSize: () => 36,
  //   overscan: 5,
  // });

  // const filtered = !queryValue ? categories?.categoriesByNode : filteredCategories?.listCategories;

  // useEffect(() => {
  //   const getFiltered = async () => {
  //     const filtered = (await API.graphql({
  //       query: queries.listCategories,
  //       variables: {
  //         filter: {
  //           name: {
  //             contains: queryValue,
  //           },
  //         },
  //       },
  //     })) as { data: ListCategoriesQuery };

  //     setFilteredCategories(filtered.data);
  //     setLoadingCategories(false);
  //   };

  //   if (queryValue) {
  //     setLoadingCategories(true);
  //     getFiltered();
  //   }
  // }, [queryValue]);

  // useEffect(() => {
  //   getCategoriesByNode({ node: 1 });
  // }, []);

  const { status, data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(['projects'], (ctx) => fetchServerPage(20, ctx.pageParam), {
      getNextPageParam: (_lastGroup, groups) => groups.length,
    });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    debug: true,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 36,
    overscan: 5,
    initialOffset: 10,
  });

  useEffect(() => {
    console.log('running use effect');
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= allRows.length - 1 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <Listbox name="ad-category" defaultValue={''}>
      {({ open, value }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Category
          </Listbox.Label>
          <div className="relative mt-1 w-full">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="block truncate">{value.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                ref={parentRef}
                className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                style={{
                  height: '200px',
                }}
              >
                <div
                  style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const post = allRows[virtualRow.index];
                    return (
                      <li
                        key={virtualRow.index}
                        style={{
                          top: '0',
                          left: '0',
                          position: 'absolute',
                          width: '100%',
                          height: `${virtualRow.size}px`,
                          transform: `translateY(${virtualRow.start}px)`,
                        }}
                        value={post}
                      >
                        <span className="font-normal block truncate">{post}</span>
                      </li>
                    );
                  })}
                </div>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CategoriesDropdown;
