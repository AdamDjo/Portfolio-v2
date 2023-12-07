import { SectionTitle } from '../Layout/SectionTitle';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import './_project.scss';

export const Projects = () => {
  return (
    <section id="project" className="project-section">
      <SectionTitle title="Some things I have built " titleNumber="0.3" />
      {/* project one */}
      <div className="projects">
        <div className="project__card">
          <div className="project__image">
            <a href="#" target="_blank">
              <img src="https://placehold.co/800@2x.png" alt="project-1"></img>
            </a>
          </div>

          <div className="project__text">
            <p>Features project</p>
            <h3>Amazone clone 3.2</h3>
            <p className="item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              deserunt voluptatum officia quo, repellendus aut voluptatem
              voluptatibus cum facilis, dicta{' '}
              <span>architecto esse debitis</span>, nulla quos ex eum quas iusto
              facere?
            </p>
            <ul className="project__list">
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
            </ul>
            <ul className="project__links">
              <li>
                <a href="#" target="_blank">
                  <TbBrandGithub></TbBrandGithub>
                </a>
                <a href="#" target="_blank">
                  <RxOpenInNewWindow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* project two */}
      <div className="projects">
        <div className="project__card reverse">
          <div className="project__image">
            <a href="#" target="_blank">
              <img src="https://placehold.co/800@2x.png" alt="project-1"></img>
            </a>
          </div>

          <div className="project__text">
            <p>Features project</p>
            <h3>Amazone clone 3.2</h3>
            <p className="item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              deserunt voluptatum officia quo, repellendus aut voluptatem
              voluptatibus cum facilis, dicta{' '}
              <span>architecto esse debitis</span>, nulla quos ex eum quas iusto
              facere?
            </p>
            <ul className="project__list">
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
            </ul>
            <ul className="project__links">
              <li>
                <a href="#" target="_blank">
                  <TbBrandGithub></TbBrandGithub>
                </a>
                <a href="#" target="_blank">
                  <RxOpenInNewWindow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="projects">
        <div className="project__card">
          <div className="project__image">
            <a href="#" target="_blank">
              <img src="https://placehold.co/800@2x.png" alt="project-1"></img>
            </a>
          </div>

          <div className="project__text">
            <p>Features project</p>
            <h3>Amazone clone 3.2</h3>
            <p className="item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              deserunt voluptatum officia quo, repellendus aut voluptatem
              voluptatibus cum facilis, dicta{' '}
              <span>architecto esse debitis</span>, nulla quos ex eum quas iusto
              facere?
            </p>
            <ul className="project__list">
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
              <li>NextJs</li>
            </ul>
            <ul className="project__links">
              <li>
                <a href="#" target="_blank">
                  <TbBrandGithub></TbBrandGithub>
                </a>
                <a href="#" target="_blank">
                  <RxOpenInNewWindow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="show-more">
        <a href="#">
          <button> Show more!</button>
        </a>
      </div>
    </section>
  );
};
