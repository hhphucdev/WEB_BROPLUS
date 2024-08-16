import { memo } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import category from "assets/user/images/categories/cat-3.jpg";
import category2 from "assets/user/images/categories/cat-1.jpg";
import category3 from "assets/user/images/categories/cat-2.jpg";
import category4 from "assets/user/images/categories/cat-3.jpg";
import category5 from "assets/user/images/categories/cat-4.jpg";

import "./style.scss";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      id: 1,
      title: "PC Gaming",
      price: "12,000,000 VND",
      quantity: "Sold: 1500",
      image: category,
    },
    {
      id: 2,
      title: "PC Gaming",
      price: "15,000,000 VND",
      quantity: "Sold: 1300",
      image: category2,
    },
    {
      id: 3,
      title: "PC Gaming",
      price: "20,000,000 VND",
      quantity: "Sold: 900",
      image: category3,
    },
    {
      id: 4,
      title: "PC Gaming",
      price: "11,000,000 VND",
      quantity: "Sold: 1600",
      image: category4,
    },
    {
      id: 5,
      title: "PC Gaming",
      price: "25,000,000 VND",
      quantity: "Sold: 700",
      image: category5,
    },
  ];

  return (
    <>
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div className="categories_slider_item" key={key}>
              <div
                className="image-container"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="info-container">
                <p>{item.title}</p>
                <p className="price">{item.price}</p>
                <p className="quantity">{item.quantity}</p>
              </div>
              <div className="add-to-cart-btn">
                Thêm vào giỏ hàng
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default memo(HomePage);
