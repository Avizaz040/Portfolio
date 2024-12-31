import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import Navigation from "./Pages/Navigation";
import AboutPage from "./Pages/AboutPage";
import EducationPage from "./Pages/EducationPage";
import SkillPage from "./Pages/SkillPage";
import ExperiencePage from "./Pages/ExperiencePage";
import WhyMePage from "./Pages/WhyMePage";
import ContactsPage from "./Pages/ContactsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <Home />,
    },
    {
      path: "/navigation",
      element: <Navigation />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/education",
      element: <EducationPage />
    },
    {
      path: "/skill",
      element: <SkillPage />
    },
    {
      path: "/experience",
      element: <ExperiencePage />
    },
    {
      path: "/whyme",
      element: <WhyMePage />
    },
    {
      path: "/contact",
      element: <ContactsPage />
    }

  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
