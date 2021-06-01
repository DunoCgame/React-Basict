import React, {useState, useEffect } from 'react';


const Array =["L","u", "i","s"];

let Saludo = "Hola";

function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
	  if (isLoggedIn) {
		return <UserGreeting />;
	  }
	  return <GuestGreeting />;
}

/***************************/
function LoginButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}




class LoginControl extends React.Component {
	
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  render(){   
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		
		if (isLoggedIn) {
		  button = <LogoutButton onClick={this.handleLogoutClick} />;
		} 
		else {
		  button = <LoginButton onClick={this.handleLoginClick} />;
		}
			return (
				  <div>
					<Greeting isLoggedIn={isLoggedIn} />
					{button}
				  </div>
			);
  }
}

const Hello =()=>{

   const [count, setCount] = useState(0);
   const [login, setLogin] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });
  
	let Value = count;

	console.log(Value);


	  return (
			<div>
			  <p>You clicked {count} times</p>
			  <button onClick={() => setCount(count + 1)}>
				Click me
			  </button>
			  
			 <Greeting isLoggedIn={login} />,
				  <button onClick={() => setLogin(true)}>
						login
				  </button>
				  <button onClick={() => setLogin(false)}>
						login-out
				  </button>
		
			</div>
			
			
	  );






	
 }
	   
	   
	   

	


export default Hello;

 // https://github.com/Yog9/SnapShot/blob/master/src/components/Header.js