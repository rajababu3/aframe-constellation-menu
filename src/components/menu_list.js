import 'aframe';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import {Entity} from 'aframe-react';
import 'aframe-look-at-component';
import React, { Component } from 'react';
import MenuListItem from './menu_list_item';


const MenuList = (props) =>{
	const menuItems = props.person.map((p)=>{
		return (
			<MenuListItem 
				onItemSelect = {props.onItemSelect}
				key={p.name} 
				p={p} />
		);
	});

	return(
		
    <Entity id="cubes1" visible="false" layout="type: circle; radius: 4;" position="-0.15 0.39 3.37" look-at="#look-cam" >
        {menuItems}
  </Entity>
	);
};

export default MenuList;