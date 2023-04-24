import React, { useState, lazy,Suspense, useEffect } from 'react';
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
import Shimmer from './components/Shimmer';
import UserContext from './utils/context/UserContext';

const Instamart = lazy(() => import("./components/Instamart"))

const About = lazy(() => import("./components/About"))


const AppLayout = () => {
	const [user, setUser] = useState({
		name: "Akshay",
		email:"Akshay123@gmail.com"
	})
	useEffect(() => {
	   
   },[user])
	return (
	<Provider store={store}>
			<Header />
			<UserContext.Provider value={{
				user: user,
				setUser:setUser

			}}>
				<Outlet />
			</UserContext.Provider>
			
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
