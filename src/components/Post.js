import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Post =()=>{
	
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
    const [Posts, setPosts] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
		
				const data = await fetch('https://jsonplaceholder.typicode.com/photos')
				const result = await data.json()
				console.log(result)
				setPosts(result) 
				  .then(
					
					(result) => {
					  setIsLoaded(true);
					  setItems(result);
					}
	
					(error) => {
					  setIsLoaded(true);
					  setError(error);
					}
					
				  )
			
    }


 if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else 
	  if (!isLoaded) {
		return <div>Loading...</div>;
	  } 
	  else {
			return (
		         setPosts.map(item => (
						<article key={item.id}>							
							<Router>
							   <Link to={`/post/${item.id}`}>						   
									<h2>{item.title}</h2>
							   </Link>
							</Router>
							  				   
						</article>
                    ))
			);
	
	  }
	
	
	
export default 	Post;
	
	