import { LeftSide } from '@/src/components/Layout/LeftSide';
import '../../src/styles/pages/home.scss';
import { RightSide } from '@/src/components/Layout/RightSide';
import { Banner } from '@/src/components/banner/Banner';
import { About } from '@/src/components/About/About';
export default function Home() {
  return (
    <main>
      <div className="left-layout">
        <LeftSide></LeftSide>
      </div>
      <div className="body-layout">
        <Banner></Banner>
        <About></About>
      </div>
      <div className="right-layout">
        <RightSide />
      </div>
    </main>
  );
}
