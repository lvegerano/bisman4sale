import { useInfiniteQuery } from '@tanstack/react-query';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef } from 'react';

async function fetchServerPage(
  limit: number,
  offset = 0
): Promise<{ rows: string[]; nextOffset: number }> {
  const rows = new Array(limit).fill(0).map((e, i) => `Async loaded row #${i + offset * limit}`);

  await new Promise((r) => setTimeout(r, 500));

  return { rows, nextOffset: offset + 1 };
}

export default function App() {
  const { status, data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(['projects'], (ctx) => fetchServerPage(10, ctx.pageParam), {
      getNextPageParam: (_lastGroup, groups) => groups.length,
    });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];

  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 30,
    overscan: 5,
  });

  useEffect(() => {
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
    <div>
      <p>
        This infinite scroll example uses React Query's useInfiniteScroll hook to fetch infinite
        data from a posts endpoint and then a rowVirtualizer is used along with a loader-row placed
        at the bottom of the list to trigger the next page to load.
      </p>

      <br />
      <br />

      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {(error as Error).message}</span>
      ) : (
        <ul
          ref={parentRef}
          className="List"
          style={{
            height: `250px`,
            width: `100%`,
            overflow: 'auto',
          }}
        >
          <li
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const isLoaderRow = virtualRow.index > allRows.length - 1;
              const post = allRows[virtualRow.index];

              return (
                <div
                  key={virtualRow.index}
                  className="hover:bg-blue-500"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {isLoaderRow ? (hasNextPage ? 'Loading more...' : 'Nothing more to load') : post}
                </div>
              );
            })}
          </li>
        </ul>
      )}
      <div>{isFetching && !isFetchingNextPage ? 'Background Updating...' : null}</div>
      <br />
      <br />
      {process.env.NODE_ENV === 'development' ? (
        <p>
          <strong>Notice:</strong> You are currently running React in development mode. Rendering
          performance will be slightly degraded until this application is build for production.
        </p>
      ) : null}
    </div>
  );
}
