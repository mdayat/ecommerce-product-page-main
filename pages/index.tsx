import type { NextPage } from "next";

import { NavbarCart, TopNavbar } from "@components/Navbar";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <TopNavbar>
        <NavbarCart />
      </TopNavbar>
    </main>
  );
};

export default Home;
