import React from "react";
// import "../../components/styles.index.css";
import "../../components/styles/index.css";

import facebook from "../../img/footer/facebook.svg";
import instagram from "../../img/footer/instagram.svg";
import twitter from "../../img/footer/twitter.svg";
import youtube from "../../img/footer/youtube.svg";

function Footer() {
  return (
    <div className="wrapper">
      <div className="footer">
        <div className="footer__top">
          <div className="footer__main _container">
            <div class="footer__row">
              <div class="footer__column">
                <div class="footer__label">Companu info</div>
                <nav class="footer__menu menu-footer">
                  <ul class="menu-footer__list">
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        About Us
                      </a>{" "}
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Carrier
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        We are hiring
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer__column">
                <div class="footer__label">Legal </div>
                <nav class="footer__menu menu-footer">
                  <ul class="menu-footer__list">
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        About Us
                      </a>{" "}
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Carrier
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        We are hiring
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer__column">
                <div class="footer__label">Features</div>
                <nav class="footer__menu menu-footer">
                  <ul class="menu-footer__list">
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Business Marketing
                      </a>{" "}
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        User Analytic
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Live Chat
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Unlimited Support
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer__column">
                <div class="footer__label">Resources</div>
                <nav class="footer__menu menu-footer">
                  <ul class="menu-footer__list">
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        IOS & Android
                      </a>{" "}
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Watch a Demo
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        Customers
                      </a>
                    </li>
                    <li class="menu-footer__item">
                      {" "}
                      <a href="" class="menu-footer__link">
                        API
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer__column">
                <div class="footer__label">Get in Touch</div>
                <div class="footer__contacts contacts-footer">
                  <a
                    href="tel:48055565656"
                    class="contacts-footer__item contacts-footer-item__phone"
                  >
                    (480)555-0103
                  </a>
                  <a
                    href=""
                    class="contacts-footer__item contacts-footer-item__map"
                  >
                    4517 Washington Ave. Manchester
                  </a>
                  <a
                    href="debra.holt@example.com"
                    class="contacts-footer__item contacts-footer-item__email"
                  >
                    debra.holt@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__container _container">
            <div class="footer__copy">
              Made With Love By Figmaland All Right Reserved{" "}
            </div>
            <div class="footer__social socail">
              <a href="" class="social__item">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="" class="social__item">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="" class="social__item">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="" class="social__item">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
