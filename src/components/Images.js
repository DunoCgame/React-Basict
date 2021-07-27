import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Images_post=()=>{
	
	const [error, setError] = useState(null);
    const [Images, setImages] = React.useState([])
	

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
		
				const data = await fetch('https://jsonplaceholder.typicode.com/photos')
				const photos = await data.json()
				
				const limit = 6; //limite de datos
				setImages(photos.slice(0, limit))
				
			
    }


    return (
	   Images.map(item => (
			<figure key={item.id} className="Images-Containner">							
					<h2 className="TitleImages">
						
							<Link to={`/photos/${item.id}`}>						   
								{item.title}
							</Link>
					
					</h2>						
					<img className="ImagesPost" src={item.thumbnailUrl}/>	  
			</figure>		
		))
    )
	
}
	
	
	

export default Images_post;