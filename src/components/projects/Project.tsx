import useAnimate from '@/src/hooks/useAnimate';

import Image from 'next/image';
import React from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { TbBrandGithub } from 'react-icons/tb';

export const Project = () => {
  return (
    <div className="list">
      {/* project One */}
      <div className="projects">
        <div className="project__card">
          <div className="project__image">
            <a href="https://githread-adam.vercel.app/" target="_blank">
              <Image
                src="/images/Githread.jpg"
                alt="Project build with love Githread"
                width={800}
                height={800}
              ></Image>
            </a>
          </div>

          <div className="project__text">
            <p>Featured project</p>
            <h3>Githread</h3>
            <p className="item description">
              Mobile Application build with Next14 with some features: Next Auth
              for authentification, with that application you can post some
              thread
              <span> GitHub</span>
            </p>
            <ul className="project__list">
              <li>NextJs 14</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Prisma</li>
              <li>PostgreSql</li>
            </ul>
            <ul className="project__links">
              <li>
                <a href="https://github.com/AdamDjo/Githread" target="_blank">
                  <TbBrandGithub></TbBrandGithub>
                </a>
                <a href="https://githread-adam.vercel.app/" target="_blank">
                  <RxOpenInNewWindow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* project Three */}
      <div className="projects">
        <div className="project__card reverse">
          <div className="project__image">
            <a href="https://music-vue3-adam.vercel.app/" target="_blank">
              <Image
                src="/images/Music.jpg"
                alt="Project build with Music App"
                width={800}
                height={800}
              ></Image>
            </a>
          </div>

          <div className="project__text">
            <p>Featured project</p>
            <h3>Music MiniProject</h3>
            <p className="item description">
              That was a an auto-formation of Vue 3, its a music website using
              Vue Option API and firebase as a backend service
            </p>
            <ul className="project__list">
              <li>Vue 3</li>
              <li>Firebase</li>
              <li>I18N</li>
              <li>PiniaStore</li>
              <li>Cypress</li>
            </ul>
            <ul className="project__links">
              <li>
                <a
                  href="https://github.com/AdamDjo/Music-Vue3-Miniproject"
                  target="_blank"
                >
                  <TbBrandGithub></TbBrandGithub>
                </a>
                <a href="https://music-vue3-adam.vercel.app/" target="_blank">
                  <RxOpenInNewWindow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* project Two */}
      <div className="projects">
        <div className="project__card">
          <div className="project__image">
            <a href="https://film-api-lemon.vercel.app/" target="_blank">
              <Image
                src="/images/Movies.jpg"
                alt="Project build with love Film application"
                width={800}
                height={800}
              ></Image>
            </a>
          </div>

          <div className="project__text">
            <p>Featured project</p>
            <h3>React Movies</h3>
            <p className="item description">
              List of movies application fetching from a from movies Api, making
              some filters, search bar, & whishlist <br></br>
              <span>ReactMovies</span>
            </p>
            <ul className="project__list">
              <li>React Js</li>
              <li>SASS</li>
              <li>LocalStorage</li>
              <li>Movies Api</li>
            </ul>
            <ul className="project__links">
              <li>
                <a href="https://github.com/AdamDjo/Film-API" target="_blank">
                  <TbBrandGithub></TbBrandGithub>
                </a>
                <a href="https://film-api-lemon.vercel.app/" target="_blank">
                  <RxOpenInNewWindow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
