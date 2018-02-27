import React from 'react';
import {connect} from 'react-redux';
import Xheader from '../xheader.jsx';
import Xgallery from '../xgallery.jsx';
import "../../template/home.css";
import $ from 'jquery';
class Xpicturedetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dataArr:[],
			bool:false
		}
	}
	render(){
		return (
			<div className="detail-content">
				<Xheader />
				{
					function(self){
						return self.state.dataArr.map((item,index)=>{
							return (
								<div key={index}>
									<img src={item.picture} style={{width:"100%"}} onClick={self.props.showGallery.bind(self)} />
									<p className="text-author">
										<span className="picture-detail-issue-no">{item.issue}</span>
										{item.sort} | {item.author}
									</p>
									<p className="day">{item.pic_date.split('/')[2]}</p>
									<p className="month">{item.pic_date.split('/')[1]}. {item.pic_date.split('/')[0]}</p>
									<div className="separate-line"></div>
									<p className="text-content">{item.pic_describe}</p>
									<div className="download">
									    <a href="http://m.wufazhuce.com/download" className="ui-link">
									        <img alt="「ONE · 一个」" className="one-image-exclude logo-img" src={require("../../public/img/app_download.png")} /></a>
									    <p className="download-text">下载「一个」APP
									    </p>
									</div>
								</div>
							)
						})
					}(this)
				}
				<div className="detail_footer">
					<span onClick={this.prevDetail.bind(this)}>上一篇</span>
					<a href="#/index/home">返回</a>
					<span onClick={this.nextDetail.bind(this)}>下一篇</span>
				</div>
				<Xgallery />
			</div>
		)
	}
	componentDidMount(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://120.78.142.165:3000/getOneById",
			async:true,
			dataType:'json',
			data:{
				id:this.props.match.params.id
			},
			success(data){
				_this.setState({
					dataArr:data
				})
			}
		});
	}
	nextDetail(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://120.78.142.165:3000/getOneById",
			async:true,
			dataType:'json',
			data:{
				id:Number(_this.props.match.params.id)+1
			},
			success(data){
				if(data!=''){
					_this.setState({
						dataArr:data
					})
					location.href="#/picdetail/"+(Number(_this.props.match.params.id)+1)
				}else{
					location.href="#/picdetail/"+_this.props.match.params.id
				}
			}
		});
	}
	prevDetail(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://120.78.142.165:3000/getOneById",
			async:true,
			dataType:'json',
			data:{
				id:Number(this.props.match.params.id)-1
			},
			success(data){
				if(data!=''){
					_this.setState({
						dataArr:data
					})
					location.href="#/picdetail/"+(Number(_this.props.match.params.id)-1)
				}else{
					location.href="#/picdetail/"+_this.props.match.params.id
				}
			}
		});
	}
}
export default connect(
	(state)=>{return state;},
	(dispatch)=>{
		return {
			showGallery(e){
				this.setState({
					bool:true
				})
				dispatch({
					type:'changeSrc',
					src:e.target.src,
					isShow:true
				})
			}
		}
	}
)(Xpicturedetail) ;