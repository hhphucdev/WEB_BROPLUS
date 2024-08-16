import { memo, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import category from "assets/user/images/categories/cat-3.jpg";
import category2 from "assets/user/images/categories/cat-1.jpg";
import category3 from "assets/user/images/categories/cat-2.jpg";
import category4 from "assets/user/images/categories/cat-3.jpg";
import category5 from "assets/user/images/categories/cat-4.jpg";
import "./style.scss";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      quantity: "Số lượng: 1500",
      image: category,
    },
    {
      id: 2,
      title: "PC Gaming",
      price: "15,000,000 VND",
      quantity: "Số lượng: 1300",
      image: category2,
    },
    {
      id: 3,
      title: "PC Gaming",
      price: "20,000,000 VND",
      quantity: "Số lượng: 900",
      image: category3,
    },
    {
      id: 4,
      title: "PC Gaming",
      price: "11,000,000 VND",
      quantity: "Số lượng: 1600",
      image: category4,
    },
    {
      id: 5,
      title: "PC Gaming",
      price: "25,000,000 VND",
      quantity: "Số lượng: 700",
      image: category5,
    },
  ];

  const featuredItems = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          id: 1,
          title: "PC Gaming",
          price: "12,000,000 VND",
          quantity: "Số lượng: 1500",
          image: category,
        },
        {
          id: 2,
          title: "PC Gaming",
          price: "15,000,000 VND",
          quantity: "Số lượng: 1300",
          image: category2,
        },
        {
          id: 3,
          title: "PC Gaming",
          price: "20,000,000 VND",
          quantity: "Số lượng: 900",
          image: category3,
        },
        {
          id: 4,
          title: "PC Gaming",
          price: "11,000,000 VND",
          quantity: "Số lượng: 1600",
          image: category4,
        },
        {
          id: 5,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
      ],
    },
    computers: {
      title: "Máy tính",
      products: [
        {
          id: 1,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 2,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 3,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 4,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 5,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
      ],
    },
    mice: {
      title: "Chuột",
      products: [
        {
          id: 1,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 2,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 3,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
        {
          id: 4,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
      ],
    },
    keyboards: {
      title: "Bàn phím",
      products: [
        {
          id: 1,
          title: "PC Gaming",
          price: "25,000,000 VND",
          quantity: "Số lượng: 700",
          image: category5,
        },
      ],
    },
  };

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
              <div className="add-to-cart-btn">Thêm vào giỏ hàng</div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section_title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          <div className="featured_menu">
            <button
              className={`featured_menu_item ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              Tất cả
            </button>
            <button
              className={`featured_menu_item ${
                selectedCategory === "computers" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("computers")}
            >
              Máy tính
            </button>
            <button
              className={`featured_menu_item ${
                selectedCategory === "mice" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("mice")}
            >
              Chuột
            </button>
            <button
              className={`featured_menu_item ${
                selectedCategory === "keyboards" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("keyboards")}
            >
              Bàn phím
            </button>
          </div>
          <div className="featured_products">
            {featuredItems[selectedCategory].products.map((product) => (
              <div className="featured_product_item" key={product.id}>
                <div
                  className="featured_product_image"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="featured_product_info">
                  <p className="featured_product_title">{product.title}</p>
                  <p className="featured_product_price">{product.price}</p>
                  <p className="featured_product_quantity">
                    {product.quantity}
                  </p>
                  <button className="featured_product_btn">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Featured End */}
    </>
  );
};

export default memo(HomePage);
