import React from 'react';
import Xheader from '../xheader.jsx';
import Xonepicture from '../others/xonepicture.jsx';
import "../../template/home.css";
export default class Xhome extends React.Component{
	render(){
		return (
			<div>
				<Xheader />
				<Xonepicture />
			</div>
		)
	}
}
