import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Category, Header, Title, Cards, AllCards, Gallery, Features, Testimonials, Team, Services, Ourskills, HowWork, Pricing, TopVideos,
  OurStats, Discount, Footer
} from './Imports'
import { useState } from "react";





function App() {


  return (
    <>
      <Header />
      <Category />
      <AllCards />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <Ourskills />
      <HowWork />
      <Pricing />
      <TopVideos />
      <OurStats />
      <Discount />
      <Footer />

    </>
  )
}

export default App;
