import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Contact from "../components/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />  

            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'service',
                element: <Service />
            },{
                path: 'contact',
                element: <Contact />
            }
        ]

    }
]);

export default router;