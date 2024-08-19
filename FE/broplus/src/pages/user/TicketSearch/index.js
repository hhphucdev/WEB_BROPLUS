import { memo } from "react";
import "./style.scss";

const TicketSearch = () => {
  return (
    <>
      <div className="container">
        <div className="section_title">
          <h2>TRA CỨU THÔNG TIN ĐẶT VÉ</h2>
        </div>
        <div className="search-form">
          <form action="">
            <div className="form-group">
              <label htmlFor="from">Số điện thoại</label>
              <input
                type="text"
                id="phone"
                placeholder="Vui lòng nhập số điện thoại"
              />
            </div>
            <div className="form-group">
              <label htmlFor="to">Vui lòng nhập mã vé</label>
              <input
                type="text"
                id="ticketCode"
                placeholder="Vui lòng nhập mã vé"
              />
            </div>
           
            

            <div className="form-group">
              <button type="submit">Tìm kiếm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(TicketSearch);
