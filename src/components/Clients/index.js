import React from "react";
import "../../components/styles/index.css";
import clients01 from "../../img/clients/01.png";
import clients02 from "../../img/clients/02.png";
import clients03 from "../../img/clients/03.png";
import clients04 from "../../img/clients/04.png";
import clients05 from "../../img/clients/05.png";
import clients06 from "../../img/clients/06.png";
import GetInTouch01 from "../../img/Get-in-touch/01.svg";
import GetInTouch02 from "../../img/Get-in-touch/02.svg";
import GetInTouch03 from "../../img/Get-in-touch/03.svg";

function Clients() {
  return (
    <main className="page">
      {/* <!-- block  clients --> */}
      <div class="page__clients clients">
        <div class="clients__container _container">
          <div class="clients__items">
            <div class="clients__item">
              <img src={clients01} alt="clients" />
            </div>
            <div class="clients__item">
              <img src={clients02} alt="clients" />
            </div>
            <div class="clients__item">
              <img src={clients03} alt="clients" />
            </div>
            <div class="clients__item">
              <img src={clients04} alt="clients" />
            </div>
            <div class="clients__item">
              <img src={clients05} alt="clients" />
            </div>
            <div class="clients__item">
              <img src={clients06} alt="clients" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- block  subscribe --> */}
      <section class="page__subscribe subscribe">
        <div class="subscribe__container _container">
          <div class="subscribe__body">
            <h2 class="subscribe__title">Subscribe For Latest Newsletter</h2>
            <form action="#" class="subscribe__form">
              <input
                type="email"
                required
                name="form[]"
                placeholder="Your Email"
                class="subscribe__input"
              />
              <button type="submit" class="subscribe__button">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <section class="page__getintouch getintouch ">
        <div class="getintouch__container _container">
          <div class="getintouch__header header-block">
            <h2 class="header-block__title">Get In Touch</h2>
            <div class="header-block__sub-title">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </div>
          </div>
          <div class="getintouch__items ">
            <div class="getintouch__items item-getintouch">
              <div class="item-getintouch__icons">
                <img src={GetInTouch01} alt="get" />
              </div>
              <div class="item-getintouch__emails">
                <a
                  href=" georgia.young@example.com"
                  class="item-getintouch__email"
                >
                  georgia.young@example.com{" "}
                </a>
                <a
                  href=" georgia.young@example.com"
                  class="item-getintouch__email"
                >
                  georgia.young@example.com{" "}
                </a>
              </div>
              <div class="item-getintouch__label">Get Support</div>
              <a href="" class="item-getintouch__button">
                Submit Request
              </a>
            </div>
            <div class="getintouch__items item-getintouch item-getintouch__active">
              <div class="item-getintouch__icons">
                <img src={GetInTouch02} alt="get" />
              </div>
              <div class="item-getintouch__emails">
                <a
                  href=" georgia.young@example.com"
                  class="item-getintouch__email"
                >
                  georgia.young@example.com{" "}
                </a>
                <a
                  href=" georgia.young@example.com"
                  class="item-getintouch__email"
                >
                  georgia.young@example.com{" "}
                </a>
              </div>
              <div class="item-getintouch__label">Get Support</div>
              <a href="" class="item-getintouch__button">
                Submit Request
              </a>
            </div>
            <div class="getintouch__items item-getintouch">
              <div class="item-getintouch__icons">
                <img src={GetInTouch03} alt="get" />
              </div>
              <div class="item-getintouch__emails">
                <a
                  href=" georgia.young@example.com"
                  class="item-getintouch__email"
                >
                  georgia.young@example.com{" "}
                </a>
                <a
                  href=" georgia.young@example.com"
                  class="item-getintouch__email"
                >
                  georgia.young@example.com{" "}
                </a>
              </div>
              <div class="item-getintouch__label">Get Support</div>
              <a href="" class="item-getintouch__button">
                Submit Request
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="page__contact contact">
        <div class="contact__container _container">
          <div class="contact__body">
            <div class="contact__content">
              <h4 class="contact__title">
                Consulting Agency For Your Business
              </h4>
              <div class="contact__text">
                the quick fox jumps over the lazy dog
              </div>
            </div>
            <a href="contact" class="contact__button">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Clients;
