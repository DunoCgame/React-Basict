import React, {useState, useEffect } from 'react';
// import axios from 'axios';


// https://www.digitalocean.com/community/tutorials/react-axios-react-es
// https://www.robinwieruch.de/react-fetching-data


function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else 
	  if (!isLoaded) {
		return <div>Loading...</div>;
	  } 
	  else {
			return (
			  <ul>
			  
				{items.map(item => (
				  <li key={item.id}>
					{item.name} {item.price}
				  </li>
				))}
				
			
				
			  </ul>
			);
  }
}

export default MyComponent;