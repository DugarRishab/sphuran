import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Circle.css";

const Circle = () => {
	const location = useLocation();
	const [classes, setClasses] = useState("");

	useEffect(() => {
		if (location.pathname.split("/")[1] === "")
			setClasses("home");
		else
			setClasses(location.pathname.split("/")[1]);
	}, [location]);

	return ( 
		<div className={`circle ${classes}`}>
			<img src="/assets/circle.png" alt="" />
		</div>
	 );
}
 
export default Circle;