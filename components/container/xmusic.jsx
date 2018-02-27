import React from 'react';
import Xheader from '../xheader.jsx';
import Xmusic_content from "../others/xmusic_content.jsx";
 class Xmusic extends React.Component{
     constructor(props){
        super(props)
     }
	render(){
		return (
			<div>
				<Xheader />
                <Xmusic_content />
			</div>
		)
	}
}
export default Xmusic