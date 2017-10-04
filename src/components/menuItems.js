import 'aframe';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import {Entity} from 'aframe-react';
import 'aframe-look-at-component';
import React, { Component } from 'react';



const url = 'https://randomuser.me/api/?results=6';
const url1 = 'https://randomuser.me/api/?results=12';


export default class UserList extends Component {
    constructor(props) {
      super(props);      
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        person: [],
        menuCat1: []};
    }
  
    componentDidMount() {
      this.UserList();
    }
    


    UserList() {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
             this.setState({ person: data.results });
        });

        fetch(url1)
        .then((resp) => resp.json())
        .then((data) => {
             this.setState({ menuCat1: data.results });
        });
    }
    
    handleClick(cubeId){
      console.log(cubeId);

    }
    render() {
      const persons = this.state.person.map((item, i) => {
        return <Entity 
                    key={item.email} 
                    id={`cube${i}`}
                    event-set__1="_event: click; _target: #cubes1; visible: true"
                    mixin="cube"
                    >
                </Entity>
      });

      const mCat1 = this.state.menuCat1.map((item, i) => {
        return <Entity 
                  key={item.email}  
                  mixin="cube">
                </Entity>
      });

      return (
        <Entity 
              geometry={{primitive: 'box'}}
              material={{color: 'red'}}
              event-set__1="_event: click; _target: #cubes; visible: true"
              event-set__3="_event: mouseenter; material.color: #5A67A6"
              event-set__4="_event: mouseleave; material.color: #FCB241"
              position="0.2 1 -2"
              scale={{x: 0.1, y: 0.1, z: 0.1}}>
        <Entity 
            id="cubes" 
            visible="false" 
            layout="type: circle; radius: 2;" 
            position="-0.15 0.39 3.37"
            look-at="#look-cam" >
                      {persons}
        </Entity>

        <Entity id="cubes1" visible="false" layout="type: circle; radius: 4;" position="-0.15 0.39 3.37" look-at="#look-cam" >
          {mCat1}
        </Entity>
        </Entity>
      );
    }
  }
