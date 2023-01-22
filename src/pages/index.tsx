import MainContent from 'src/components/MainContent';
import Aside from 'src/components/Aside';
import AppWrapper from '@components/AppWrapper';

export default function Example() {
  return (
    <>
      <AppWrapper>
        <MainContent />
        <Aside />
      </AppWrapper>
    </>
  );
}
