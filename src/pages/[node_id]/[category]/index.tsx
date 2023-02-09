import AppWrapper from '@components/AppWrapper';
import { API } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import { Category } from 'src/types/category';
import * as queries from '@graphql/queries';
import { CategoriesByNodeQuery } from 'src/API';

interface CategoryIndexPageProps {
  category: string;
  categories: Partial<Category>[];
}

const CategoryIndexPage = ({ category, categories }: CategoryIndexPageProps) => {
  return (
    <AppWrapper categories={categories}>
      <div>CategoryIndexPage {category}</div>
    </AppWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category, node_id: nodeID } = query;

  if (!nodeID) {
    return {
      notFound: true,
    };
  }

  const categories = await (API.graphql({
    query: queries.categoriesByNode,
    variables: {
      nodeID,
      sortDirection: 'ASC',
    },
  }) as Promise<{ data: CategoriesByNodeQuery }>);

  return {
    props: {
      category,
      categories: categories.data.categoriesByNode?.items,
    },
  };
};

export default CategoryIndexPage;
