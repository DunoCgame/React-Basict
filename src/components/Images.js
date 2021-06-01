import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Images_post =()=>{
	
	const [error, setError] = useState(null);
    const [Images, setImages] = React.useState([])
	

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
		
				const data = await fetch('https://jsonplaceholder.typicode.com/photos')
				const photos = await data.json()
				
				const limit = 6;
				// console.log(photos.slice(0, limit))
				setImages(photos.slice(0, limit))
				
			
    }

    return (
 
                   Images.map(item => (
						<figure key={item.id} className="Images-Containner">							
								<h2 className="TitleImages">
									<Router>
										<Link to={`/photos/${item.id}`}>						   
											{item.title}
										</Link>
									</Router>
								</h2>
							  		
								<img className="ImagesPost" src={item.thumbnailUrl}/>	  
						</figure>
						
                    ))
    )
	
	  }
	
	
	
	
	
	
	
	
	
	
	
	
	// https://stackoverflow.com/questions/55552147/invariant-failed-you-should-not-use-route-outside-a-router
	
	// https://bluuweb.github.io/react-udemy/06-router/#ejemplo <Images_post/>


export default Images_post;