import ContentHeader from '@components/ContentHeader';
import ContentSidebar from '@components/ContentSidebar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function AppWrapper({ children }: Props) {
  return (
    <div className="min-h-full">
      <ContentHeader />
      <div className="py-10">
        <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
          <ContentSidebar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppWrapper;
