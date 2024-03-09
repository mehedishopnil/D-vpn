import { Outlet } from "react-router-dom";
import Header from "../pages/share/Header/Header";
import Footer from "../pages/share/Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <div className="w-full p-0 m-0 bg-[#0F0F0F]">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;