import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Location from './Components/location';
import Callback from './Components/callBack';
import AboutUpavan from './Components/aboutUpavan';
import FooterCall from './Components/footerCall';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      trigger: false
    };

    // ReactGA.initialize('UA-110570651-1');
    // ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  openPopUp = () => {
    this.setState({trigger:true})
  }

  updateTrigger = () => {
    this.setState({trigger:false})
  }

  render() {
    const {trigger} = this.state;
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <AboutUpavan openBrochure={this.openPopUp} />
        {/* <About data={this.state.resumeData.main}/> */}
        <Location />
        {/* <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/> */}
        {/* <Footer data={this.state.resumeData.main}/> */}
        <Callback updateTrigger={this.updateTrigger} trigger={trigger} />
        <FooterCall />
      </div>
    );
  }
}

export default App;
