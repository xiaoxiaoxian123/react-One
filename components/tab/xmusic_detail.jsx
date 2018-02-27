import React from 'react';
import Xheader  from '../xheader.jsx';
import Xmdetail  from '../others/xmdetail.jsx';

class Xmusic_detail extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
		return (
            <div>
                <Xheader />
                <Xmdetail />
            </div>
        )
	}
}
export default Xmusic_detail