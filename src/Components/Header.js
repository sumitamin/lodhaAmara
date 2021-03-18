import React, { Component, Fragment } from 'react';
// import ParticlesBg  from "particles-bg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../assets/css/home.css';
import RequestCall from './requestCall';

const Header = (props) => {


    if(props.data){
       var project = props.data.project;
       var github = props.data.github;
      var name = props.data.name;
      var description= props.data.description;
      var city= props.data.address.city;
      var networks= props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    const carouselImage = [1,2,3,4,5]
    
    return (
       <Fragment>
      <header id="home">
         <div style={{width:'100%', height:'80px', position:'fixed', zIndex:9, top:0, backgroundColor:'white', boxShadow:'0 1px 6px 0 rgba(32, 33, 36, 0.28)'}}>
            <h2>GODREJ UPAVAN</h2>
            <h5>Thane Extension</h5>
         </div>
     
      <div className="banner-carousel">
         <Carousel autoPlay>
         { carouselImage.map((v) =>
            <div>
               <img src={`/images/carousel${v}.jpg`} />
            </div>
         )}
         </Carousel>
      </div>
      
      <RequestCall classN='contact-form' />
      {/* <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> */}

   </header>
   {/* <div className="banner-carousel">
   <Carousel>
      { carouselImage.map((v) =>
         <div>
            <img src={`/images/carousel${v}.jpg`} />
         </div>
      )}
   </Carousel>
</div> */}
</Fragment>
    );
  }

export default Header;
