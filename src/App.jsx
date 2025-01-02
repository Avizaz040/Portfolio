import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Pages/Navigation";
import AboutPage from "./Pages/AboutPage";
import EducationPage from "./Pages/EducationPage";
import SkillPage from "./Pages/SkillPage";
import ExperiencePage from "./Pages/ExperiencePage";
import WhyMePage from "./Pages/WhyMePage";
import ContactsPage from "./Pages/ContactsPage";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <Home />,
    },
    {
      path: "/portfolio/navigation",
      element: <Navigation />,
    },
    {
      path: "/portfolio/about",
      element: (
        <>
          <AboutPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/portfolio/education",
      element: (
        <>
          <EducationPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/portfolio/skill",
      element: (
        <>
          <SkillPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/portfolio/experience",
      element: (
        <>
          <ExperiencePage />
          <Footer />
        </>
      ),
    },
    {
      path: "/portfolio/whyme",
      element: <>
        <WhyMePage />
        <Footer />
        </>
    },
    {
      path: "/portfolio/contact",
      element: <>
        <ContactsPage />
        <Footer />
        </>
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
