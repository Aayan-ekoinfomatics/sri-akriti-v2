import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Navbar from "./components/global components/Navbar";
import Footer from "./components/global components/Footer";
import AllCollections from "./components/pages/AllCollections";
import Sidebar from "./components/global components/Sidebar";
import { useRecoilState } from "recoil";
import SidebarAtom from "./recoil/atoms/sidebar/SidebarAtom";
import mobile_menu from "../src/assets/icons/menu-mobile.svg";
import cross from "../src/assets/icons/cross.svg";
import Productpage from "./components/pages/Productpage";
import AboutUs from "./components/pages/AboutUs";
import SingleCategoryProducts from "./components/pages/SingleCategoryProducts";
import CategoryPage from "./components/pages/CategoryPage";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Account from "./components/pages/Account";
import MyAccount from "./components/pages/MyAccount";
import Cart from "./components/pages/Cart";

function App() {
  const [navToggle, setNavToggle] = useRecoilState(SidebarAtom);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative">
      {/* overlay  */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000071] z-[1000] transition-all duration-500 ${
          navToggle ? "block" : "hidden"
        }`}
        onClick={() => setNavToggle(false)}
      ></div>

      <div>
        <Sidebar />
      </div>

      {/* mobile navbar open button */}
      <div className="md:hidden fixed top-[42px] right-[25px] z-[1003] cursor-pointer">
        <img
          src={!navToggle ? mobile_menu : cross}
          className="w-[27px] z-[9990] "
          onClick={() => setNavToggle(!navToggle)}
        />
      </div>

      <div className="sticky top-0 left-0 right-0 bg-white pt-3 md:pt-8 z-[999]">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to='/' />} />
          <Route path="/product-details" element={<Productpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<MyAccount />} />
          <Route
            path="/single-category/:category_id"
            element={<CategoryPage />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
