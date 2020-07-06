import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Facerecognition from './Components/Facerecognition/Facerecognition';
import Logo from './Components/Logo/logo';
import Imagelinkform from './Components/Imagelinkform/Imagelinkform';
import './App.css';
import Rank from './Components/Ranks/Rank';
import Particles from 'react-particles-js';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';



const particleOptions = {
    particles:{
      number:{
        value:30,
        density:{
          enable: true,
          value_area: 800
        }
      }
    }

}
 
 const initialState = {
       input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      issignedin:false,
      user:{
        id:'',
      name:'',
      email:'',
      entries:0,
      joined:''
    }
 }           

class App extends Component {
  constructor(){
    super();
    this.state= initialState;
     
    }
    loadUser = (data) =>{
      this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
    }
 
  

  calculateFacelocation = (data) =>{
     const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
     const image= document.getElementById('inputimage');
     const width= Number(image.width);
     const height= Number(image.height);
     return{
      leftCol: clarifaiFace.left_col*width,
      rightCol:width-(clarifaiFace.right_col*width),
      topRow:clarifaiFace.top_row*height,
      bottomRow: height-(clarifaiFace.bottom_row*height)
     }
  }

  displayFacebox = (box) =>
  {
    console.log(box);
    this.setState({box: box});
  }
  onInputChange = (event) =>{
  this.setState({input:event.target.value});
}

onButtonsubmit = () => {

  this.setState({imageUrl: this.state.input});
      fetch('https://serene-congaree-36947.herokuapp.com/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          }).then(response =>response.json())
      .then(response =>{
         if (response) {
          fetch('https://serene-congaree-36947.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
             })
            .catch(console.log)
            this.displayFacebox(this.calculateFacelocation(response))
        }
      })
    }
  
  onroutechange = (route) => {
      if(route === 'signout')
      {
        this.setState(initialState)
      }
      else if(route === 'home')
      {
        this.setState({issignedin:true})
      }
      this.setState({route:route});

  }
   render(){
    return(
      <div className="App">
       <Particles className='particles'
                      params={{particleOptions}}/>


        <Navigation issignedin={this.state.issignedin} onroutechange={this.onroutechange}/>
        { this.state.route === 'home' ?
        <div> 
          <Logo />
          <Rank name={this.state.user.name} entries={this.state.user.entries}/>
          <Imagelinkform onInputChange={this.onInputChange} onButtonsubmit={this.onButtonsubmit} />
          <Facerecognition box={this.state.box} imageurl={this.state.imageUrl} />
        </div>

        :(
          this.state.route === 'signin'       
          ?<Signin loadUser={this.loadUser} onroutechange={this.onroutechange} />
          :<Register loadUser={this.loadUser} onroutechange={this.onroutechange} />
          )        
        }
      </div>
      );
  }
}







export default App;


  //Clarifai.FACE_DETECT_MODEL