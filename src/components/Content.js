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


export default Content;