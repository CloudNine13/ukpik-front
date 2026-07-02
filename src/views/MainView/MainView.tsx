import { TopBar, Section } from '@components';
import { Hero } from '../Hero';
import { SectionLayout } from '../SectionLayout';
import { SmoothScrollLayout } from '../SmoothScrollLayout';
import video from '@assets/video.mp4';
import video2 from '@assets/video2.mp4';
import video3 from '@assets/video3.mp4';

function MainView() {
  const mainStyle = 'flex flex-col relative text-red';
  const sectionsStyle = 'flex flex-col';
  const heroStyle = 'sticky top-0 z-0 snap-section h-[100vh]';

  const sectionsData = [
    {
      name: 'Introduction',
      innerName: 'TESTING',
      description: 'First description',
      component: <Section video={video2} />,
    },
    {
      name: 'Features',
      innerName: 'ANOTHER TEST',
      description: 'This is a description',
      component: <Section video={video3} />,
    },
    {
      name: 'Analytics',
      innerName: 'ONE MORE TEST',
      description: 'This is another description',
      component: <Section video={video} />,
    },
    {
      name: 'Conclusion',
      innerName: 'LAST TEST',
      description: 'This is the last description',
      component: <Section video={video2} />,
    },
  ];

  const bgClasses = ['bg-red', 'bg-black'];
  const textClasses = ['text-black', 'text-red'];

  return (
    <SmoothScrollLayout>
      <main className={mainStyle}>
        <TopBar />
        <div className={sectionsStyle}>
          <Hero className={heroStyle} />
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
