import footer_photo from "../../assets/img/footer_photo.svg";
import footer_subscribe from "../../assets/img/footer_subscribe.svg";
import footer_icons from "../../assets/img/footer_icons.svg";

const CartFooter = () => {
  return (
    <footer>
      <div className="footer_feedback">
        <div className="img__bg_feedback"></div>
        <div className="footer_photo">
          <img src={footer_photo} alt="footer_photo" />
          <p className="footer_photo_text">
            “Vestibulum quis porttitor dui! Quisque
          </p>
          <p className="footer_photo_text">viverra nunc mi, a pulvinar purus</p>
          <p className="footer_photo_text">condimentum“</p>
        </div>

        <div className="footer_subscribe">
          <p className="footer_sub1">SUBSCRIBE</p>
          <p className="footer_sub2">FOR OUR NEWLETTER AND PROMOTION</p>
          <img src={footer_subscribe} alt="footer_subscribe" />
        </div>
      </div>

      <div className="footer_down">
        <div className="footer_down_text">
          <p>© 2023 Brand All Rights Reserved.</p>
        </div>

        <div className="footer_down_icons">
          <img src={footer_icons} alt="footer_icons" />
        </div>
      </div>
    </footer>
  );
};

export default CartFooter;
