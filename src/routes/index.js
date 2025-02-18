import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetail from "../pages/Blog/BlogDetail";
import BlogNews from "../pages/Blog/BlogNews";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error";
import HomePage from "../pages/Home";
import InfoUser from "../pages/InfoUser";
import Login from "../pages/Login";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />
          },
          {
            path: "news",
            element: <BlogNews />
          },
          {
            path: ":id",
            element: <BlogDetail />
          }
        ]
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "*",
        element: <Error404/>
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "info-user",
            element: <InfoUser />
          }
        ]
      }
    ]
  }
  
];

