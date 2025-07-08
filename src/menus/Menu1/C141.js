import React from "react";
import "./home.css";
import Marquee from "react-fast-marquee";
import data from "../../sitedata.json";
import  url from "../../sitedata.json";



class Home extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  
    componentDidMount() {
        // Simple POST request with a JSON body using fetch
      
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ pname: 'p1c141' }) //change the 'pname'(ex:p1 -project1 and p2-project2...etc..) for different projects
        };
        fetch(url, requestOptions)
        .then(response => response.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
          })
        }
  render() {
   const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div  className="">
     <section className="container" id="latest">
      {data.Latestnews.map((details) => {
        return (
         <section className="" >
           <div className="announcements row d-lg-block">
            <h3  className="announcements__text col-xs-8  col-lg-2 col-md-12 col-sm-12 text-center " id="announcements" >
            {details.ptitle}
             </h3>
             {details.a.map((e) => {
              return( 
               <Marquee className="col-xs-8 col-lg-10 col-md-12 col-sm-12 "
               id="marquee" 
               pauseOnHover
               direction="left" 
               speed={60}  delay={10}  >
               <p className= "announcements__list">
               <a href={e.link}>  
               {e.aname} 
                </a>
                 </p> 
                 </Marquee> 
                )
              })}
            </div>
          </section>
        )})}
       </section>
     </div> ;
   return(
   <div className="test">
    <section className="container" id="latest">
      {items.map((details) => {
        return (
          <section className="" >
            <div className="announcements row d-lg-block">
             <h3  className="announcements__text col-xs-8  col-lg-2 col-md-12 col-sm-12   text-center" id="announcements" >
              {details.ptitle}
               </h3>
               {details.a.map((e) => {
                return( 
                <Marquee 
                  className="col-xs-8 col-lg-10 col-md-12 col-sm-12"
                  pauseOnHover 
                  direction="left"
                  speed={30}  >
                  <p className="announcements__list">
                  <a href="node151">  
                   {e.aname} 
                   </a>
                  </p> 
                 </Marquee>  
                )
              })}
            </div>
          </section>
        )})}
       </section>
     </div>
    ) 
   }
  }         
export default Home;  