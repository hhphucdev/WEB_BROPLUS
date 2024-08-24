import { memo } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTopButton from "../ScrollToTopButton";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default memo(MasterLayout);
