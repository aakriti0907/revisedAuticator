import React from 'react';
import './Auticator.css';
import { NavLink } from 'react-router-dom';

function Auticator(){

     
    // const onNavigateInfo = () => {
    //     this.props.history.push("/FAQ");
    // }
  

  return (
    <div>
    <div className="header">
     <h1a>autiCator
      <span className="options">
      <NavLink activeClassName={"buttons"} to = "/game">Play Games</NavLink>{' '}
    <NavLink activeClassName={"buttons"} to = "/cartoon">Watch Cartoons</NavLink>{' '}
      <NavLink activeClassName={"buttons"} to = "/FAQ">Session Interaction</NavLink>
  	{/* <button className="buttons" variant="outline-primary" onClick={onNavigateInfo}>
  	Session Interactions
      </button> */}
      {' '}
    </span>
    </h1a>  
    </div>
    <div className="Alpha">
  	<p><h2a>Get ready to see some amazing videos and cartoons and some fun games to play!</h2a></p>
    <p>
  	<h2a>WHY US?</h2a>  
       <img  src="Brain.png" alt="Brain" style={{height: "300px", width: "300px", marginLeft: "600px" }} /><br/>
      We are a platform which can provide a child with special needs what they need the most, interaction. An environment where they can learn and play as well as as interact with others.<br/>
      The app is parent as well as child friendly. The content have been developed with the help of research and understanding.We provide a platform which can easily be accessed by child even without the help of the parent.
      This app provides a calm and compose environment for the child so that they can learn enthusiatically.<br/>
      At home learning while having interactive sessions with the tutors.<br/>
      </p>
      <h2a>Get ready to see some amazing videos and cartoons and some fun games to play!</h2a>
    <br/>
    </div>
   <div className="connect">
     CONNECT WITH US THROUGH:
     <img src="connect.jpeg" alt="Brain" style={{height: "200px", width: "200px" }} />
 	<ul>
     	<li>Instagram{" "}
     	<span role="img" aria-label="Emoji icon of a instagram">     	🚀
     	</span>
     	</li>
     	<li>Facebook{" "}
     	<span role="img" aria-label="Emoji icon of a rocket">
       	🚀
     	</span>
     	</li> 
     	<li>Twitter{" "}
     	<span role="img" aria-label="Emoji icon of a rocket">
       	🚀
     	</span>
     	</li>
 	</ul >
   </div>
   <p>
       
       
    </p>
    </div>
  );

}

export default Auticator;