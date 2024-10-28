import Header from "../../components/Header/Header";
import CartFooter from "../../components/CartFooter/CartFooter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];

    if (newQuantity < 1) {
      updatedCartItems.splice(index, 1);
    } else {
      updatedCartItems[index].quantity = newQuantity;
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Header />
      <div className="top-head center">
        <h2 className="top-head__heading">SHOPPING CART</h2>
        <nav className="breadcrumbs">
          <Link to="#" className="breadcrumbs__link">
            HOME /
          </Link>
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
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="product-box-cart" key={index}>
                <div className="product-box-cart__product">
                  <img
                    className="product-box-cart__img"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="product-box-cart__content">
                    <p className="product-box-cart__title">{item.title}</p>

                    <div className="product-box-cart__text-position">
                      <p className="product-box-cart__text">
                        Price: ${item.price}
                      </p>
                    </div>

                    <p className="product-box-cart__price">Size: {item.size}</p>

                    <div className="product-box-cart__text-position__2">
                      <p className="product-box-cart__text">Quantity:</p>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="ship-box-cart__text">Корзина пуста</p>
          )}

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
                    <p className="card-box-cart__text_text">
                      ${calculateTotal()}
                    </p>
                  </div>
                  <div className="card-box-cart__text-position__2">
                    <p className="card-box-cart__text1">GRAND TOTAL</p>
                    <p className="card-box-cart__text2">${calculateTotal()}</p>
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
