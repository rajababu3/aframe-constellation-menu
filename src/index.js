import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './components/menuItems';

const url = 'https://randomuser.me/api/?results=6';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      person: [],
      selectedItem: null
    };
  }

  componentDidMount() {
    this.App();
  }

    App() {
      fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
          this.setState({ 
            person: data.results,
            selectedItem: data.results[0]
            });
      });
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
          <a-mixin id="cube" geometry="primitive: box;" material="color: #FFFBE0"> </a-mixin>
          <a-mixin id="secondary" material="color: #FFB400"></a-mixin>
        </a-assets>
        <a-entity id="look-cam" camera="userHeight: 1.6" look-controls wasd-controls></a-entity>
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
        <Entity 
                geometry={{primitive: 'box'}}
                material={{color: 'red'}}
                event-set__1="_event: click; _target: #cubes; visible: true"
                event-set__3="_event: mouseenter; material.color: #5A67A6"
                event-set__4="_event: mouseleave; material.color: #FCB241"
                position="0 1 -2"
                scale={{x: 0.1, y: 0.1, z: 0.1}}>
        </Entity>

        <MenuList 
                  person = {this.state.person}
                  onItemSelect={ selectedItem => this.setState({selectedItem})} />

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>

      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
