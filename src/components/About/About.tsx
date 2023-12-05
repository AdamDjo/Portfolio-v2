import { SectionTitle } from '../Layout/SectionTitle';
import './_about.scss';
import { AiFillThunderbolt } from 'react-icons/ai';

export const About = () => {
  return (
    <section className="AboutSection" id="about">
      <SectionTitle title="About Me" titleNumber="0.1."></SectionTitle>
      <div className="AboutContent">
        <div className="AboutText">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            veritatis quia eaque optio itaque eius doloribus harum excepturi
            accusantium! Quas excepturi illo veniam error odio neque iste.
            Numquam, accusantium commodi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            dolorem deleniti reiciendis id sunt provident ut! Blanditiis quam
            nostrum culpa similique harum illo illum voluptatibus necessitatibus
            vel minima, nisi quibusdam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            dolorem deleniti reiciendis id sunt provident ut! Blanditiis quam
            nostrum culpa similique harum illo illum voluptatibus necessitatibus
            vel minima, nisi quibusdam.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Javascript (ES6+)
            </li>
          </ul>
        </div>
        <div className="AboutImage">
          {' '}
          <div className="border-image"> </div>
          <div className="image-content">
            <img src="https://placehold.co/600x400/png" alt="Adam"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
