import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-12 bg-gray-100 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
