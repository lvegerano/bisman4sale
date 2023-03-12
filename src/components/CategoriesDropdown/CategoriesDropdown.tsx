import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

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
  const { status, data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(['projects'], (ctx) => fetchServerPage(20, ctx.pageParam), {
      getNextPageParam: (_lastGroup, groups) => {
        console.log('getting next');
        return groups.length;
      },
    });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];
  const parentRef = useRef(null);

  console.log('lenght', hasNextPage ? allRows.length + 1 : allRows.length);
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    debug: true,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 36,
    overscan: 10,
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
    return () => {
      console.log('unmount');
    };
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
                unmount={false}
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
                          // height: `${virtualRow.size}px`,
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
