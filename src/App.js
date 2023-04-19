import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import store from './utils/store';
import {Provider} from "react-redux"
import { lazy,Suspense } from 'react';
import Shimmer from './components/Shimmer';

const Instamart = lazy(() => import("./components/Instamart"))

const About = lazy(() => import("./components/About"))


const AppLayout = () => {

	return (
	<Provider store={store}>
			<Header />
			<Outlet />
			<Footer />
</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body /> 
			},
			{
				path: "/about",
				element: <Suspense fallback={<Shimmer />}><About /> </Suspense>
			},
			{
				path: "/contact",
				element: <Contact /> 
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu /> 
			},
			{
				path: "/instamart",
				element: (<Suspense fallback={<Shimmer />}><Instamart /> </Suspense>)
			},
		]
	}
	
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
