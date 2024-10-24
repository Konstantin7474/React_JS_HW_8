import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import main_content_picture_1 from "../../assets/img/main_content_picture_1.svg";
import main_content_title_1 from "../../assets/img/main_content_title_1.svg";
import block_1 from "../../assets/img/block_1.svg";
import block_2 from "../../assets/img/block_2.svg";
import block_3 from "../../assets/img/block_3.svg";
import block_4 from "../../assets/img/block_4.svg";

import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main_content_1">
          <div className="picture_1">
            <img
              className="main_content_1_picture"
              src={main_content_picture_1}
              alt="main_content_picture_1"
            />
          </div>
          <div className="title_1">
            <img
              className="title_main_1"
              src={main_content_title_1}
              alt="main_content_title_1"
            />
            <div className="title_text_1">
              <h1 className="h1_1">THE BRAND</h1>
              <div className="h2_text">
                <h3 className="h2_1">OF</h3>
                <h3 className="h2_1">LUXERIOUS</h3>
                <h3 className="h2_2">FASHION</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="main_content_2">
          <div className="block_1_main_content_2">
            <div className="img__bg"></div>

            <img className="block_1_image_1" src={block_1} alt="block_1" />

            <div className="block_1_text_11">
              <h3 className="block_1_text_1">30% OFF</h3>
              <h3 className="block_1_text_2">FOR WOMEN</h3>
            </div>
          </div>
          <div className="block_1_main_content_2">
            <div className="img__bg"></div>

            <img className="block_1_image_1" src={block_2} alt="block_2" />
            <div className="block_1_text_11">
              <h3 className="block_1_text_1">HOT DEAL</h3>
              <h3 className="block_1_text_2">FOR MEN</h3>
            </div>
          </div>
          <div className="block_1_main_content_2">
            <div className="img__bg"></div>
            <img className="block_1_image_1" src={block_3} alt="block_3" />
            <div className="block_1_text_11">
              <h3 className="block_1_text_1">NEW ARRIVALS</h3>
              <h3 className="block_1_text_2">FOR KIDS</h3>
            </div>
          </div>
          <div className="block_4_main_content_2">
            <div className="img__bg"></div>
            <img className="block_1_image_4" src={block_4} alt="block_4" />
            <div className="block_1_text_111">
              <h3 className="block_1_text_12">LUXIROUS & TRENDY</h3>
              <h3 className="block_1_text_22">ACCESORIES</h3>
            </div>
          </div>
        </div>

        <div className="main_content_3">
          <h1 className="title_2">Fetured Items</h1>
          <h4 className="title_2_main_3">
            Shop for items based on what we featured in this week
          </h4>
          <ProductsList limit={6} />
        </div>

        <Link className="product_browse_link" to="/product_cart">
          <div className="product_browse">
            <h2 className="product_browse__text">Browse All Product</h2>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
