import { TopBar } from '../../components';
import { Hero } from '../Hero';
import { SmoothScrollLayout } from '../SmoothScrollLayout';

function MainView() {
  const mainStyle = 'flex flex-col relative text-red';
  const sectionsStyle = 'flex flex-col';

  return (
    <SmoothScrollLayout>
      <main className={mainStyle}>
        <TopBar />
        <div className={sectionsStyle}>
          <Hero />
        </div>
      </main>
    </SmoothScrollLayout>
  );
}

export default MainView;
