import React, {useEffect, useState} from "react";
import {Timer} from "./Timer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [counter, setCounter] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCounter(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);

	return (
		
		
	
		<div className="text-center">
			<h1>Countdown</h1>
		<Timer count={counter} />
		</div>		 
	
		
	);
};

export default Home;