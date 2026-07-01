import { TopBar } from '../../components';
import { Hero } from '../Hero';
import { SectionLayout } from '../SectionLayout';
import { SmoothScrollLayout } from '../SmoothScrollLayout';

function MainView() {
  const mainStyle = 'flex flex-col relative text-red';
  const sectionsStyle = 'flex flex-col';

  const sectionsData = [
    { name: 'Introduction', component: <Hero className="relative" /> },
    { name: 'Features', component: <Hero className="relative" /> },
    { name: 'Analytics', component: <Hero className="relative" /> },
    { name: 'Conclusion', component: <Hero className="relative" /> },
  ];

  const bgClasses = ['bg-red', 'bg-black'];
  const textClasses = ['text-black', 'text-red'];

  return (
    <SmoothScrollLayout>
      <main className={mainStyle}>
        <TopBar />
        <div className={sectionsStyle}>
          <Hero className="sticky top-0 z-0 snap-section" />
          {sectionsData.map((section, index) => {
            const assignedBg = bgClasses[index % bgClasses.length];
            const assignedText = textClasses[index % textClasses.length];
            const displayIndex = String(index + 1).padStart(2, '0');

            return (
              <SectionLayout
                key={index}
                bgColor={assignedBg}
                textColor={assignedText}
                sectionIndex={displayIndex}
                sectionName={section.name}
              >
                {section.component}
              </SectionLayout>
            );
          })}
        </div>
      </main>
    </SmoothScrollLayout>
  );
}

export default MainView;
