import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",  // This means it will render Home when path is "/"
        element: <Home />,
      },
      {
        path: "about", // No need for "/about", just "about"
        element: <About />,
      },
      {
        path: "services",
        element: <Services/>
      },
      {
        path: "contact",
        element: <Contact/>
      
      },

      {
        path: "terms",
        element: <Terms/>

      },

      {
        path: "gallery",
        element: <Gallery/>
      }
    
    ],
  },
]);

export default router;
