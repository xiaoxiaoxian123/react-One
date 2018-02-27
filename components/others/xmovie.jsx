import React from 'react';
import $ from 'jQuery';
import {connect} from 'react-redux';
import Xheader from '../xheader.jsx';
import '../../template/video.css';
class Xmovie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			arr:[]
		}
	}
  render() {
    return (
    <div>
    <Xheader />
    <div className="xvideo">
    {
	  	function(self){
	  		return self.state.arr.map((item,index)=>{
	        return (
	        	<a className="videos" href="#/vdetail" key={index} data-index={item.video_id} onClick={
	        		self.props.changeVid.bind(self)
	        	}>
				  		<header>-影视-</header>
				  		<p className="title">
				  			{item.title}
				  		</p>
				  		<b>文/{item.author}</b>
				  		<p className="img-bg">
				  			<img src={item.imgs}/>
				  		</p>
				  		<p className="cont">
				  			<span>{item.describ}</span>
				  			<em>——关于{item.about}</em>
				  		</p>
				  		<p className="times">2017/10/31</p>
				  	</a>
	        )
	      })
	    }(this)
    }
    </div>
    </div>)
  }
  componentDidMount(){
  	var _this = this;
  	$.ajax({
				type:"post",
				url:"http://120.78.142.165:3000/getVideo",
				success(data){
					data = JSON.parse(data);
					_this.setState({
						arr:data,
						vlength:data.length
					})
					console.log(_this.state)
				},
				error(){
					console.log('error');
				}
			});
	}
}
export default connect((state)=>{
	return state
},(dispatch,props)=>{
	return {
		changeVid(e){
			dispatch({
				type:"changeVid",
				videoId:e.currentTarget.getAttribute('data-index'),
				vlength:this.state.vlength
			})
		}
	}
})(Xmovie);
