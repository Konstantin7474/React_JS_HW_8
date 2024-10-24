import CartFooter from "../../components/CartFooter/CartFooter";
import Header from "../../components/Header/Header";

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <div className="top-head center">
        <h2 className="top-head__heading">REGISTRATION</h2>

        <nav className="breadcrumbs">
          <a href="#" className="breadcrumbs__link">
            HOME /
          </a>
          <a href="#" className="breadcrumbs__link">
            MEN /
          </a>
          <a href="#" className="breadcrumbs__link_site">
            NEW ARRIVALS
          </a>
        </nav>
      </div>

      <main>
        <div className="registration-box-cart-all center">
          <div className="registration-box-cart">
            <div className="registration-box-cart__product">
              <p className="registration-box-cart__text">Your Name</p>

              <form className="registration-box-cart__form">
                <input
                  className="registration-box-cart__input"
                  type="text"
                  id="name"
                  placeholder="First Name"
                />
                <input
                  className="registration-box-cart__input"
                  type="text"
                  id="name"
                  placeholder="Last Name"
                />
              </form>
            </div>

            <div className="registration-box-cart__product__male-female">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.5" cy="8.5" r="8" stroke="#A4A4A4" />
              </svg>

              <p className="registration-box-cart__male">Male</p>

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.5" cy="8.5" r="8" stroke="#A4A4A4" />
              </svg>

              <p className="registration-box-cart__female">Female</p>
            </div>

            <div className="registration-box-cart__product">
              <p className="registration-box-cart__text">Login details</p>

              <form className="registration-box-cart__form">
                <input
                  className="registration-box-cart__input"
                  type="text"
                  id="name"
                  placeholder="Email"
                />
                <input
                  className="registration-box-cart__input"
                  type="text"
                  id="name"
                  placeholder="Password"
                />
              </form>

              <p className="registration-box-cart__text1">
                Please use 8 or more characters, with at least 1 number and a
                mixture of uppercase and lowercase letters
              </p>
            </div>
          </div>

          <div className="registration-description">
            <div className="registration-descriptiont__product">
              <div className="registration-description__content">
                <p className="registration-description__text">
                  LOYALTY HAS ITS PERKS
                </p>
                <p className="registration-description__price">
                  Get in on the loyalty program where you can earn points and
                </p>
                <p className="registration-description__price__2">
                  unlock serious perks. Starting with these as soon as you join:
                </p>

                <div className="registration-description__list-position">
                  <div className="registration-description__list-position2">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                        fill="black"
                      />
                    </svg>

                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                        fill="black"
                      />
                    </svg>

                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                        fill="black"
                      />
                    </svg>

                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                        fill="black"
                      />
                    </svg>

                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="registration-description__list-position1">
                    <p className="registration-description__list">
                      15% off welcome offer
                    </p>

                    <p className="registration-description__list">
                      Free shipping, returns and exchanges on all orders
                    </p>

                    <p className="registration-description__list">
                      $10 off a purchase on your birthday
                    </p>

                    <p className="registration-description__list">
                      Early access to products
                    </p>

                    <p className="registration-description__list">
                      Exclusive offers & rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reg_links">
            <a href="./product.html">
              <div className="reg_links__browse">
                <h2 className="cart_links__text">JOIN NOW</h2>
              </div>
            </a>
          </div>
        </div>
      </main>
      <CartFooter />
    </>
  );
};

export default RegistrationPage;
