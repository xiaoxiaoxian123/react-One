import React from 'react';
import {connect} from 'react-redux';
import "weui";
class Xgallery extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<div className="weui-gallery" style={{display:this.props.isShow?"block":"none"}}>
				    <span className="weui-gallery__img" style={{backgroundImage: "url("+this.props.src+")"}}></span>
				    <div className="weui-gallery__opr">
				        <a onClick={this.props.cancelShow} href="javascript:" className="weui-gallery__del">
				            <img src={'/img/close.png'} />
				        </a>
				    </div>
				</div>
			</div>
		)
	}
}
export default connect(
	(state)=>{return state;},
	(dispatch)=>{
		return {
			cancelShow(){
				dispatch({
					type:"changeSrc",
					bool:false,
					src:''
				})
			}
		}
	}
)(Xgallery)
