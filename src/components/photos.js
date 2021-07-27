import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useParams, useHistory } from "react-router-dom";

const Photos =()=>{
		let history = useHistory();
		const {id} = useParams()
		
		console.log(history);
		
		function handleClick() {
				history.push("/");
		}


		const [error, setError] = useState(null);
		const [Images, setImages] = React.useState([])
			

		React.useEffect(() => {
				fetchData()
			}, [])

			const fetchData = async () => {
				
				const data = await fetch('https://jsonplaceholder.typicode.com/photos/'+id)
			 // const data = await fetch('https://jsonplaceholder.typicode.com/photos/1')
				const photos = await data.json()
				
				setImages(photos)
			

			}

				return(
			<figure className="Images-Containner">	
				<h2 className="TitleImages">{Images.title}</h2>		
				<img className="ImagesPost" src={Images.thumbnailUrl}/>	
				<button className="btn-button" type="button" onClick={handleClick} > Go home</button>
			</figure>
						
						)

				
}
	
export default Photos;
	
	