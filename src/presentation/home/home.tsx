import "../home/styles/common.css";
import { Fragment } from "react/jsx-runtime";

import { BlueWaveNavbar } from "./components/bluewave_navbar";
import { Start } from "./components/start";
import { Services } from "./components/services";
import { AboutUs } from "./components/about_us";
import { Features } from "./components/features";
import { Pricing } from "./components/pricing";
import { ContactUs } from "./components/contact_us";
import { Quote } from "./components/quote";
import { BlueWaveFooter } from "./components/footer";

export const BlueWave = () => {
  return (
    <Fragment>
      <BlueWaveNavbar></BlueWaveNavbar>
      <Start />
      <Services />
      <AboutUs />
      <Features />
      <Pricing />
      <ContactUs />
      <Quote />
      <BlueWaveFooter />
    </Fragment>
  );
};
