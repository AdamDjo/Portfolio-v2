import Image from 'next/image';
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
            Hey there, fellow digital explorer! I m not your typical web
            developer; I m a code conjurer and pixel perfectionist on a mission
            to craft online experiences that resonate. With my keyboard as a
            magic wand and a canvas of code, I breathe life into designs and
            transform them into captivating, interactive realities.
          </p>
          <p>
            My passion for elegant aesthetics dances with my love for
            cutting-edge technology, resulting in websites that are not just
            functional, but enchanting.
          </p>
          <p>
            From HTML incantations to CSS sorcery and JavaScript wizardry, I
            wield a diverse arsenal of skills to create user-centric, visually
            stunning, and seamlessly responsive websites. Join me on this
            exhilarating journey where imagination meets innovation, and
            together, we ll sculpt the digital realm into something
            extraordinary.
          </p>
          <p>Here are a few technologies I ve been working with recently:</p>
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
              Vue Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              React Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Next / Nuxt Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              SASS / Tailwind / Bootstrap
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Node js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              Express Js
            </li>
            <li>
              <span>
                <AiFillThunderbolt></AiFillThunderbolt>
              </span>
              MongoDB
            </li>
          </ul>
        </div>
        <div className="AboutImage">
          <div className="image-content">
            <Image
              src="/images/Portfolio.png"
              alt="Profile Pic"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
