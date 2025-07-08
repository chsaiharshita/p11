import React, { useState, Component } from 'react';
import FontSizeChanger from 'react-font-size-changer';
import "./Nav.css";


export default function Fontsize () {
  return (
       <div className="float-right icons" id="app" >
       <ul className="socials" >
       <FontSizeChanger
        targets={['.container']}
        onChange={(element, newValue, oldValue) => {
          console.log(element, newValue, oldValue);
        }}
        options={{
          stepSize: 1,
          range: 5
        }}
          
        customButtons={{
           
          up: <span style={{'fontSize': '15px'}}  id="fontsize"  >
              <div className= "size"> A+</div>
              </span>,
          normal:<span style={{'fontSize': '14px'}} id="fontsize" > 
               <div className= "size"> A</div></span>,
          down: <span style={{'fontSize': '12px'}}  id="fontsize"  > 
                <div className= "size" > A-</div>
          </span>,
          style: {
            backgroundColor: 'white',
            color: 'black',
            WebkitBoxSizing: 'border-box',
            WebkitBorderRadius: '5px',
            width: '30px',
            height: '25px'
          },
          buttonsMargin:4
        }}  
      /> 
</ul>
</div>
  )}

{/*
 
function Fontsize() {
  const [fontSize, setFontSize] = useState(14); // Initial font size

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2); // Increase font size by 2
  };

  const normalFontSize = () => {
    setFontSize(14); 
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(prevSize - 2, 12)); // Decrease font size by 2, but not below 12
  };

  return (
    <div className="container">
      <button onClick={increaseFontSize}>
          A+</button>
          <button onClick={normalFontSize}>
          A</button>
      <button onClick={decreaseFontSize}>
          A-</button>
      <div  style={{ fontSize: `${fontSize}px`}} >

      </div>
    </div>
  );
};

export default Fontsize;  */}

{/*<FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>{j.name}</span>,
            down: <span style={{'fontSize': '20px'}}>{j.name}</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
          />


  <ul className="navbar-nav navlinkdetails links">
        {data.drop.map((j) =>{
        return(
          <React.Fragment>
        <li className="nav-item dropdown" id="dropdown">
          <a 
             className="nav-link dropdown-toggle"
             id="navbarDropdown" 
             href={j.link}>
            {j.name}
            <span className="sr-only">(current)</span>
          </a>
          
           <div className="dropdown-menu">
            <div className="Dropdown-item " aria-labelledby="nav-Dropdown" id="item1">
             {j.children.map((item) => {
                 return(
                  <li className=""  id="dropdown-item">
                  <a  className="nav-link"  href={item.link} >
                     {item.name }
                   </a>
                  </li>
                    )})}
                  </div>
                </div>
               </li>  
              </React.Fragment>
            )})}
          </ul> 


*/}


