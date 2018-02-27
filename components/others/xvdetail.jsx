import React from 'react';
import $ from 'jQuery';
import Xheader from '../xheader.jsx';
import { connect } from 'react-redux';
import '../../template/video.css';
class Xvdetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: []
		}
	}
	render() {

		return(
			<div>
				<Xheader />
				<div className="vdetail">
    	{
    		function(self){
    			return self.state.arr.map((item,index)=>{
		        return (
		        		<div key={index}>
    							<div className="title" >
										<h3>
											{item.title}
											<em>——关于{item.about}</em>
										</h3>
										<span>文/{item.author}</span>
									</div>
									<div className="cont" dangerouslySetInnerHTML={{ __html: item.vcont }}>
									</div>
    						</div>
		        )
		    	})
    		}(this)
    	}
    	<div className="vfooter">
				<button onClick={this.props.toPrev.bind(this)}>上一篇</button>
				<a href="#/index/video">返回</a>
				<button onClick={this.props.toNext.bind(this)}>下一篇</button>
			</div>
    </div>
   </div>
		)
	}
	loadlists(){
		var _this = this;
		console.log("ajax",this.props.videoId)
		$.ajax({
			type: "post",
			url: "http://120.78.142.165:3000/getVideoAll",
			data: {
				id: _this.props.videoId
			},
			success(data) {
				data = JSON.parse(data);
				if(data.length!=0){
					_this.setState({
						arr: data
					})
				}
				
			}
		});
	}
	componentDidMount() {
		this.loadlists();
	}
}
export default connect((state) => {
	console.log("connect",state)
	return state
}, (dispatch) => {
	return {
		toNext(){
			console.log("tonext",this.props.videoId)
			if(this.props.videoId<this.props.vlength){
				dispatch({
					type:"toNext",
					videoId:Number(this.props.videoId)+1
				})
				console.log("success",this.props.videoId)
				this.loadlists()
			}else if(this.props.videoId==this.props.vlength){
				this.loadlists()
			}
		},
		toPrev(){
			console.log("toprev",this.props.videoId)
			if(this.props.videoId>1){
				dispatch({
					type:"toPrev",
					videoId:Number(this.props.videoId)-1
				})
				console.log("success",this.props.videoId)
				this.loadlists()
			}else if(this.props.videoId==1){
				this.loadlists()
			}
		}
	}
})(Xvdetail);