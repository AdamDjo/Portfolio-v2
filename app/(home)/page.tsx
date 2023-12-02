import { LeftSide } from '@/src/components/Layout/LeftSide';
import '../../src/styles/pages/home.scss';
import { RightSide } from '@/src/components/Layout/RightSide';
export default function Home() {
  return (
    <main>
      <div className="left-layout">
        <LeftSide></LeftSide>
      </div>
      <div className="body-layout">test</div>
      <div className="right-layout">
        <RightSide />
      </div>
    </main>
  );
}
