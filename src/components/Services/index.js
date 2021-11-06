import React from "react";
import "../../components/styles/index.css";
import services01 from "../../img/services/01.svg";
import services02 from "../../img/services/02.svg";
import services03 from "../../img/services/03.svg";
import advantages04 from "../../img/advantages/04.svg";
import advantages05 from "../../img/advantages/05.svg";
import advantages06 from "../../img/advantages/06.svg";
import advantages07 from "../../img/advantages/07.svg";

function Services() {
  return (
    <main className="page">
      {/* <!-- 3  cards services  --> */}
      <section class="page__services services">
        <div class="services__container _container">
          <div class="services__body">
            <div class="services__column">
              <div class="services__item item_service">
                <div class="item-service__icon">
                  {" "}
                  <img src={services01} alt="Environmental Consulting" />{" "}
                </div>
                <h3 class="item-service__title"> Environmental Consulting</h3>
                <div class="item-service__text">
                  {" "}
                  We focus on argonomics and meeting you where you work
                </div>
              </div>
            </div>
            <div class="services__column">
              <div class="services__item item_service">
                <div class="item-service__icon">
                  {" "}
                  <img src={services02} alt="Environmental Consulting" />{" "}
                </div>
                <h3 class="item-service__title">Finance and consultancy </h3>
                <div class="item-service__text">
                  {" "}
                  Just type what's on your min and we'll get you there.
                </div>
              </div>
            </div>
            <div class="services__column">
              <div class="services__item item_service item-service__green">
                <div class="item-service__icon">
                  {" "}
                  <img src={services03} alt="Environmental Consulting" />{" "}
                </div>
                <h3 class="item-service__title">
                  {" "}
                  Finance Service Consulting{" "}
                </h3>
                <div class="item-service__text">
                  the quick fox jumps over the lazy dog
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- block four  advantages 4 cards --> */}
      <section class="page__advantages advantages">
        <div class="advantages__container _container">
          <div class="advantages__header header-block">
            <h2 class="header-block__title">Designing Better Experience</h2>
            <div class="header-block__sub-title">
              Problems trying to resolve the conflict between the two major
              realms <br />
              of Classical physics: Newtonian mechanics
            </div>
          </div>
          <div class="advantages__body">
            <div class="advantages__column">
              <div class="advantages__item">
                <div class="advantages__icon">
                  {" "}
                  <img src={advantages04} alt="advantages" />{" "}
                </div>
                <div class="advantages__value">972 +</div>
                <div class="advantages__text">Consumer Products</div>
              </div>
            </div>
            <div class="advantages__column">
              <div class="advantages__item">
                <div class="advantages__icon">
                  {" "}
                  <img src={advantages05} alt="advantages" />{" "}
                </div>
                <div class="advantages__value">181 +</div>
                <div class="advantages__text">Financial Services </div>
              </div>
            </div>
            <div class="advantages__column">
              <div class="advantages__item">
                <div class="advantages__icon">
                  {" "}
                  <img src={advantages06} alt="advantages" />{" "}
                </div>
                <div class="advantages__value">92</div>
                <div class="advantages__text">Environmental</div>
              </div>
            </div>
            <div class="advantages__column">
              <div class="advantages__item">
                <div class="advantages__icon">
                  {" "}
                  <img src={advantages07} alt="advantages" />{" "}
                </div>
                <div class="advantages__value">746 +</div>
                <div class="advantages__text">Business Finance</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
