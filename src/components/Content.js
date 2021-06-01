import React, {useState, useEffect } from 'react';

const Content =(prop)=>{
	
	
	return(
	
	<article className="article" id="articulo">
		<h2>{prop.title}</h2>
		<img src={prop.image} width="100px" height="100px"/>
		<p>{prop.texto}</p>
		
	</article>
	
	)
	
	
}

// <Content 
// title="zero"  
// image={logo} 
// texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 				   when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
// />

export default Content;