import { LeftSide } from '@/src/components/Layout/LeftSide';
import '../../src/styles/pages/home.scss';
import { RightSide } from '@/src/components/Layout/RightSide';
import { Banner } from '@/src/components/banner/Banner';
import { About } from '@/src/components/About/About';
import { Experience } from '@/src/components/Experiences/Experience';
import { Projects } from '@/src/components/projects/Projects';
export default function Home() {
  return (
    <main>
      <div className="left-layout">
        <LeftSide></LeftSide>
      </div>
      <div className="body-layout">
        <Banner></Banner>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </div>
      <div className="right-layout">
        <RightSide />
      </div>
    </main>
  );
}
