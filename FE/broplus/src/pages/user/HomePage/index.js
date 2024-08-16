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
      image: category,
    },
    {
      id: 2,
      title: "PC Gaming",
      image: category2,
    },
    {
      id: 3,
      title: "PC Gaming",
      image: category3,
    },
    {
      id: 4,
      title: "PC Gaming",
      image: category4,
    },
    {
      id: 5,
      title: "PC Gaming",
      image: category5,
    },
  ];

  return (
    <>
      {/*Categories Begin*/}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.image})` }}
              key={key}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/*Categories End*/}
    </>
  );
};

export default memo(HomePage);
