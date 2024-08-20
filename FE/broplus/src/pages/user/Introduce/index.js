import { memo } from "react";
import "./style.scss";

const Introduce = () => {
  return (
    <>
      <div className="container">
        <div className="section_title">
          <h2>BROPLUS</h2>
          <p>"Chất lượng là danh dự"</p>
        </div>
        <div className="section_content">
          <p>
            BroPlus là một công ty chuyên cung cấp các sản phẩm công nghệ thông
            minh, chất lượng cao. Với đội ngũ nhân viên trẻ trung, năng động và
            chuyên nghiệp, chúng tôi luôn cố gắng mang đến cho khách hàng những
            sản phẩm tốt nhất, dịch vụ chăm sóc khách hàng tận tình nhất.
          </p>
          <p>
            Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng
            nhất, giá cả hợp lý nhất và dịch vụ chăm sóc khách hàng tốt nhất.
            Đến với BroPlus, khách hàng sẽ được trải nghiệm một dịch vụ mua sắm
            trực tuyến tuyệt vời, nhanh chóng, tiện lợi và an toàn.
          </p>
        </div>
        <div className="section_image_text">
          <div className="image_container">
            <img src="path/to/your/image.jpg" alt="BroPlus" />
          </div>
          <div className="text_container">
            <h3>Về chúng tôi</h3>
            <p>
              BroPlus luôn đặt chất lượng sản phẩm và dịch vụ lên hàng đầu.
              Chúng tôi không ngừng cải tiến và phát triển để mang đến cho khách
              hàng những trải nghiệm tốt nhất.
            </p>
            <p>
              Với phương châm "Chất lượng là danh dự", chúng tôi cam kết mang
              đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Introduce);
