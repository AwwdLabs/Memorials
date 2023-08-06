import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';

import Notifier from "@/components/header/Notifier";
import Header from "@/components/header/Header";
import Navlist from "@/components/header/Navlist";
import Info from "@/components/header/Info";
import OpeningTimes from "@/components/header/OpeningTimes";
import Footer from "@/components/footer/Footer";



function App({ Component, pageProps }) {
  return (
    <div className="z-30 bg-white">
      <div className="">
        {/* <Notifier /> */}
        <Header />
        <Navlist />
        <OpeningTimes />
        <Info />
      </div>
      <Component {...pageProps} />
      
    </div>
  );
}

export default App;
