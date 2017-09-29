import React, { Component } from 'react';
import 'aframe';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import {Entity} from 'aframe-react';


const url = 'https://randomuser.me/api/?results=10';


export default class UserList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {person: []};
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
    }
  
    render() {
      const persons = this.state.person.map((item, i) => {
          console.log(item);
        return <Entity key={item.email} mixin="cube"></Entity>
      });
  
      return (
        <Entity 
        geometry={{primitive: 'box'}}
        material={{color: 'red'}}
              event-set__1="_event: click; _target: #cubes; visible: true"
              event-set_2 ="_event: click; _target: #cubes; visible: false"
              event-set__3="_event: mouseenter; material.color: #5A67A6"
              event-set__4="_event: mouseleave; material.color: #FCB241"
              position="-1 0 -2">
        <Entity id="cubes" visible="false" layout="type: line; margin: 5" position="0 1 -3">
          {/* <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity>
          <Entity mixin="cube"></Entity> */}
          {persons}
        </Entity>
        </Entity>
      );
    }
  }