import Header from "../../components/Header/Header";
import product3 from "../../assets/img/product3.jpeg";
import product2 from "../../assets/img/product2.jpeg";
import CartFooter from "../../components/CartFooter/CartFooter";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="top-head center">
        <h2 className="top-head__heading">SHOPPING CART</h2>
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
        <div className="product-box-cart-all">
          <div className="product-box-cart">
            <div className="product-box-cart__product">
              <img
                className="product-box-cart__img"
                src={product3}
                alt="product3"
              />
              <div className="product-box-cart__content">
                <svg
                  className="product-box-cart__svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                    fill="#575757"
                  />
                </svg>

                <p className="product-box-cart__title">MANGO PEOPLE</p>
                <p className="product-box-cart__title">T-SHIRT</p>

                <div className="product-box-cart__text-position">
                  <p className="product-box-cart__text">Price:</p>
                  <p className="product-box-cart__text">$300</p>
                </div>

                <p className="product-box-cart__price">Color: Red</p>

                <p className="product-box-cart__price">Size: Xl</p>

                <div className="product-box-cart__text-position__2">
                  <p className="product-box-cart__text">Quantity:</p>
                  <p className="product-box-cart__text">2</p>
                </div>
              </div>
            </div>

            <div className="product-box-cart__product">
              <img
                className="product-box-cart__img"
                src={product2}
                alt="product2"
              />
              <div className="product-box-cart__content">
                <svg
                  className="product-box-cart__svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                    fill="#575757"
                  />
                </svg>

                <p className="product-box-cart__title">MANGO PEOPLE</p>
                <p className="product-box-cart__title">T-SHIRT</p>

                <div className="product-box-cart__text-position">
                  <p className="product-box-cart__text">Price:</p>
                  <p className="product-box-cart__text">$300</p>
                </div>

                <p className="product-box-cart__price">Color: Red</p>

                <p className="product-box-cart__price">Size: Xl</p>

                <div className="product-box-cart__text-position__2">
                  <p className="product-box-cart__text">Quantity:</p>
                  <p className="product-box-cart__text">2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="shipandcard-box-cart">
            <div className="ship-box-cart">
              <div className="ship-box-cart__product">
                <div className="ship-box-cart__content">
                  <p className="ship-box-cart__text">SHIPPING ADRESS</p>

                  <form className="ship-box-cart__inputs">
                    <input
                      className="ship-box-cart__input-style"
                      type="text"
                      id="name"
                      placeholder="  Bangladesh"
                    />
                    <input
                      className="ship-box-cart__input-style"
                      type="text"
                      id="name"
                      placeholder="  State"
                    />
                    <input
                      className="ship-box-cart__input-style"
                      type="text"
                      id="name"
                      placeholder="  Postcode / Zip"
                    />
                  </form>

                  <a href="#">
                    <div className="ship-box-cart__browse">
                      <h2 className="ship-box-cart__browse__text">
                        GET A QUOTE
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="card-box-cart">
              <div className="card-box-cart__product">
                <div className="card-box-cart__content">
                  <div className="card-box-cart__text_box">
                    <p className="card-box-cart__text">SUB TOTAL</p>
                    <p className="card-box-cart__text_text">$900</p>
                  </div>
                  <div className="card-box-cart__text-position__2">
                    <p className="card-box-cart__text1">GRAND TOTAL</p>
                    <p className="card-box-cart__text2">$900</p>
                  </div>

                  <svg
                    className="card-box-cart__svg"
                    width="275"
                    height="1"
                    viewBox="0 0 275 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M275 0H0V1H275V0Z" fill="#E2E2E2" />
                  </svg>

                  <a href="./product.html">
                    <div className="card-box-cart__browse">
                      <h2 className="card-box-cart__browse__text">
                        PROCEED TO CHECKOUT
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="cart_links">
            <a href="./product.html">
              <div className="cart_links__browse">
                <h2 className="cart_links__text">CLEAR SHOPPING CART</h2>
              </div>
            </a>

            <a href="./product.html">
              <div className="cart_links__browse">
                <h2 className="cart_links__text">CONTINUE SHOPPING</h2>
              </div>
            </a>
          </div>
        </div>
      </main>
      <CartFooter />
    </>
  );
};

export default CartPage;
