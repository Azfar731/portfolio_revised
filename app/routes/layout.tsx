import { div } from "framer-motion/client";
import Nav from "~/components/Nav";
import { Outlet } from "react-router";
import Footer from "~/layout/Footer";
import SocialLinks from "~/components/SocialLinks";
import personData from "~/data/personalData.json";
import LinksContainer from "~/components/LinksContainer";
export default function Layout() {
  return (
    <>
      <Nav name="Azfar Razzaq" />
      <Outlet />
      <LinksContainer />
      <Footer name="Azfar Razzaq" email="azfarrazzaq23@gmail.com" />
    </>
  );
}
