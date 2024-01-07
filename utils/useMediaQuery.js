// src: https://www.geeksforgeeks.org/create-a-custom-hook-to-make-next-js-apps-responsive/

'use client'
import { useEffect, useState } from "react"; 

const useMediaQuery = () => { 
	// const [width, setWidth] = useState(0); 
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

	const handleWindowSizeChange = () => { 
		// setWidth(window.innerWidth); 
    // console.log(window.innerWidth)

    if(window.innerWidth < 768) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    }
    else if(window.innerWidth < 1024) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    }
    else {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
	}; 

	useEffect(() => { 
		handleWindowSizeChange(); 

		/* Inside of a "useEffect" hook add 
		an event listener that updates 
		the "width" state variable when 
		the window size changes */
		window.addEventListener("resize", 
			handleWindowSizeChange); 

		// Return a function from the effect 
		// that removes the event listener 
		return () => { 
			window.removeEventListener( 
				"resize", handleWindowSizeChange); 
		}; 
	}, []); 

	return {isMobile, isTablet, isDesktop}
}; 

export default useMediaQuery; 
