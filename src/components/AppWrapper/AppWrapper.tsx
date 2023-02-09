import ContentHeader from '@components/ContentHeader';
import ContentSidebar from '@components/ContentSidebar';
import { ReactNode } from 'react';
import { Category } from 'src/types/category';

type AppWrapperProps = {
  showSidebar?: boolean;
  children: ReactNode;
  categories?: Partial<Category>[];
};

function AppWrapper({ children, categories, showSidebar = true }: AppWrapperProps) {
  return (
    <div className="min-h-full">
      <ContentHeader />
      <div className="py-10">
        <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
          {showSidebar && <ContentSidebar categories={categories} />}
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppWrapper;
