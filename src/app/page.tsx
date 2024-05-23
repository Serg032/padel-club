import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import BottomBar from "./components/topbar/topbar";
import HomeBody from "./components/home-body/home-body";

export default function Home() {
  return (
    <>
      <HomeBody />
      <BottomBar />
    </>
  );
}
