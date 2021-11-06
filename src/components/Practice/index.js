import React from "react";
import "../../components/styles/index.css";

import practice01 from "../../img/practice/01.jpg";
import practice02 from "../../img/practice/02.jpg";
import practice03 from "../../img/practice/03.jpg";
import practice04 from "../../img/practice/04.jpg";
import whoweare01 from "../../img/whoweare/01.svg";
import whoweare02 from "../../img/whoweare/02.svg";
import video from "../../img/whoweare/video.png";

function Practice() {
  return (
    <main className="page">
      {/* <!-- block practice advice  --> */}
      <section class="page__practice practice">
        <div class="practice__container _container">
          <div class="practice__header header-block">
            <h2 class="header-block__title">Pracice Advice</h2>
            <div class="header-block__sub-title">
              {" "}
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </div>
          </div>
          <div class="practice__body">
            <div class="practice__column">
              <article class="practice__item item-practice">
                <div class="item-practice__content">
                  <a href="" class="item-prctice__link">
                    <h4 class="item-practice__title">
                      A signle source of truth
                    </h4>
                  </a>
                  <div class="item-pracrice__text">
                    Newton thought that light was made up of particles, but then
                    it was discovered
                  </div>
                </div>

                <a href="" class="item-practice__image _ibg">
                  <img src={practice01} alt="A signle source of truth" />
                </a>
              </article>
            </div>
            <div class="practice__column">
              <article class="practice__item item-practice">
                <div class="item-practice__content">
                  <a href="" class="item-prctice__link">
                    <h4 class="item-practice__title">
                      Fastest way to organize
                    </h4>
                  </a>
                  <div class="item-pracrice__text">
                    “Quantum mechanics” is the description of the behaviour of
                    matter
                  </div>
                </div>
                <a href="" class="item-practice__image _ibg">
                  <img src={practice02} alt="Fastest way to organize" />
                </a>
              </article>
            </div>
            <div class="practice__column">
              <article class="practice__item item-practice">
                <div class="item-practice__content">
                  <a href="" class="item-prctice__link">
                    <h4 class="item-practice__title">
                      Fastest way to take action
                    </h4>
                  </a>
                  <div class="item-pracrice__text">
                    They describe a universe consisting of bodies moving
                  </div>
                </div>

                <a href="" class="item-practice__image _ibg">
                  <img src={practice03} alt=" Fastest way to  take action" />
                </a>
              </article>
            </div>
            <div class="practice__column">
              <article class="practice__item item-practice">
                <div class="item-practice__content">
                  <a href="" class="item-prctice__link">
                    <h4 class="item-practice__title">Work better together</h4>
                  </a>
                  <div class="item-pracrice__text">
                    They finally obtained a consistent description of the
                    behaviour
                  </div>
                </div>

                <a href="" class="item-practice__image _ibg">
                  <img src={practice04} alt="Work better together" />
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- block  who we are --> */}
      <section class="page__whoweare whoweare">
        <div class="whoweare__container _container">
          <div class="whoweare__header header-block">
            <h2 class="header-block__title">Who We Are</h2>
            <div class="header-block__sub-title">
              Problems trying to resolve the conflict between the two major
              realms <br />
              of Classical physics: Newtonian mechanics
            </div>
          </div>
          <div class="whoweare__body">
            <div class="whoweare__vidoe">
              <img
                width="400"
                height="315"
                src={video}
                title="YouTube video player"
                frameborder="0"
              />
            </div>
            <div class="whoweare__content">
              <div class="whoweare__top">
                <h2 class="whoweare__title">Most trusted in our field</h2>
                <div class="whoweare__text">
                  Most calendars are designed for teams. Slate is designed for
                  freelancers who want a simple way to plan their schedule.
                </div>
                <div class="whoweare__items">
                  <div class="whoweare__item item-whoweare">
                    <div class="item-whoweare__icon">
                      <img src={whoweare01} alt="whoweare" />
                    </div>
                    <div class="item-whoweare__body">
                      <h2 class="item-whoweare__title">
                        the quick fox jumps over the lazy dog
                      </h2>
                      <div class="item-whoweare__text">
                        Things on a very small scale ... Things on a very small
                        scale ...
                      </div>
                    </div>
                  </div>
                  <div class="whoweare__item item-whoweare">
                    <div class="item-whoweare__icon">
                      <img src={whoweare02} alt="whoweare" />
                    </div>
                    <div class="item-whoweare__body">
                      <h2 class="item-whoweare__title">
                        the quick fox jumps over the lazy dog
                      </h2>
                      <div class="item-whoweare__text">
                        Things on a very small scale ... Things on a very small
                        scale ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Practice;
