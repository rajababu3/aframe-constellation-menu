import 'aframe';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import 'aframe-look-at-component';
import React from 'react';

//<Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
//
const MenuListItem = ({person, onItemSelect}) => {
	return(
        <Entity events={{click: () => console.log(onItemSelect(person)) }} mixin="cube" >    
         </Entity>

	);
};

export default MenuListItem;