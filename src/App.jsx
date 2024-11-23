import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Styles/style.css'
import SideBar from "./componet/sidebar"
import HeroSection from "./Pages/HeroSection"
import AboutSection from "./Pages/AboutSection"
import ServicesSection from "./Pages/ServicesSection"
import ProtofolioSection from "./Pages/ProtofolioSection"
import ContactSection from "./Pages/ContactSection"
import TestimonialSection from './Pages/TestimonialSection'
// import { useLocation } from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        
        <SideBar />
        <HeroSection />
      </div>
    )
  },
  {
    path: "About",
    element: <div>
      <SideBar />
      <AboutSection />
    </div>,
  },
  {
    path: "Services",
    element: <div>
      <SideBar />
      <ServicesSection />
    </div>,
  },
  {
    path: "Protfolio",
    element: <div>
      <SideBar />
      <ProtofolioSection />
    </div>,
  },
  {
    path: "ContactUs",
    element: <div>
      <SideBar />
      <ContactSection />
    </div>,
  },
  {
    path: "Testimonial",
    element: <div>
      <SideBar />
      <TestimonialSection />
    </div>,
  },
]);

const options = {
  damping: 0.07,
}

function App() {
  const [spinner, setSpinner] = useState(true);


  // const location = useLocation();
  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
    document.querySelector('body').classList.add('dark');

  }, []);



  // useEffect(() => {

  // }, [location])

  return (
    <div className='main-container'>
      <div className={"content " + ((spinner === false) ? "Hide" : "")}>
        <div className="loading">
          <p>loading</p>
          <span></span>
        </div>
      </div>
      <div className='main-content'>
   
        <RouterProvider router={router} />
      </div>

    </div>
  )
}

export default App
