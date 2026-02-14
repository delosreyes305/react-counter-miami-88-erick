import React, {useEffect, useState} from "react";
import {Timer} from "./Timer";


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
			<h1 className="mt-5">Minutes Counter</h1>
		<Timer count={counter} />
		</div>		 
	
		
	);
};

export default Home;