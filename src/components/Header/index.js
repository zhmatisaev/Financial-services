import React from "react";
import cover from "../../img/mainblock/cover.jpg";
import "../../components/styles/index.css";

function Header() {
  return (
    <div class="wrapper">
      {/* <!-- block header --> */}
      <header class="header">
        <div class="header__container _container">
          <a href="" class="header__logo">
            Relvise
          </a>
          {/* <!-- nav bar  --> */}
          <nav class="header__menu menu">
            <ul class="menu__list">
              <li class="menu__item">
                <a href="" class="menu__link">
                  Home{" "}
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Product{" "}
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Pricing{" "}
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Contact{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main class="page">
        <div class="page__main-block main-block">
          <div class="main-lock__container _container">
            {/* <!--  <div class="main-block__body ограничить  title , text , button  --> */}
            <div class="main-block__body">
              <h1 class="main-block__title">
                Finance and Consultancy Solution
              </h1>
              <div class="main-block__text">
                We know how large objects will act, but things on a small scale.
              </div>
              <div class="main-block__buttons">
                <a href="" class="main-block__button main-block__button_orange">
                  {" "}
                  Get Quote Now
                </a>
                <a href="" class="main-block__button main-block__button_border">
                  {" "}
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="main-block__image _ibg">
            <img src={cover} alt="cover" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Header;
