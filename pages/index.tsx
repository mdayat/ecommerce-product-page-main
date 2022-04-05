import type { NextPage } from "next";

import { TopNavbar, NavbarLinks } from "@components/Navbar";
import { useBreakpoint } from "app/hooks";

const Home: NextPage = () => {
  const { breakpoint } = useBreakpoint();

  return (
    <main className="min-h-screen">
      <TopNavbar>
        {breakpoint.size === "DESKTOP" && <NavbarLinks device="DESKTOP" />}
      </TopNavbar>
    </main>
  );
};

export default Home;
