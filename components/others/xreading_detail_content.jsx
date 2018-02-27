import React from 'react';
import $ from 'jQuery';
// router
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import  '../../template/reading.css';
import {connect} from "react-redux";
import Xgallery from '../xgallery.jsx';
class Xreading_detail_content extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			arr:[],
			reId:0
		}
	}
  render() {
   	 return (
   	 	<div>
   			<div className="detail_text">
	   	 		{
	   	 			function(self){
	   	 				return self.state.arr.map((item,index)=>{
	   	 					return(
	   	 						<div  key={index}  dangerouslySetInnerHTML={{ __html: item.essay }}></div>
							)
	   	 				})
	   	 			}(this)
	   	 		}
	   		</div>
			<div className="footer">
					<span onClick={this.subDetail.bind(this)}>上一篇</span>
					<Link to="/index/reading">返回</Link>
					<span onClick={this.addDetail.bind(this)}>下一篇</span>
			</div>
		</div>
   	 )
  }
  readDetail(){
  	var _this = this;
  	var detailUrl=location.href.split('/');
  	console.log(detailUrl[detailUrl.length-1]);
  	$.ajax({
		type:"post",
		url:"http://120.78.142.165:3000/getReading_detail",
		dataType:"json",
		data:{
			id:detailUrl[detailUrl.length-1]
		},
		success(data){
			if(data.length!=0){
				_this.setState({
					arr: data,
					reId:data[0].id
				})
			}
		},
		error(){
			console.log('error');
		}
	});
  }
  componentDidMount(){
  	this.readDetail();
	}
  addDetail(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://120.78.142.165:3000/getReading_detail",
			async:true,
			dataType:'json',
			data:{
				id:_this.state.reId+1	
			},
			success(data){
				if(data!=''){
					_this.setState({
						arr:data,
						reId:data[0].id
					})
					location.href="#/reading_detail/"+(Number(_this.state.reId))
					console.log(data[0].id)
				}else{
					location.href="#/reading_detail/"+_this.state.reId	
				}
				//console.log(_this.state.reId)
			}
		});
	}
   subDetail(){
		var _this = this;
		$.ajax({
			type:"post",
			url:"http://120.78.142.165:3000/getReading_detail",
			async:true,
			dataType:'json',
			data:{
				id:_this.state.reId-1	
			},
			success(data){
				if(data!=''){
					_this.setState({
						arr:data,
						reId:data[0].id
						
					})
					location.href="#/reading_detail/"+(Number(_this.state.reId))
				}else{
					location.href="#/reading_detail/"+_this.state.reId	
				}
			}
		});
	}
}
export default connect((state)=>{
	//console.log(state)
	return state
},(dispatch,props)=>{
	return {
		
			/*Next(){
			console.log("tonext",this.props.reading_id)
			if(this.props.reading_id<this.props.rlength){
				dispatch({
					type:"Next",
					reading_id:Number(this.props.reading_id)+1
				})
				console.log("success",this.props.reading_id)
				this.readList()
			}else if(this.props.reading_id==this.props.rlength){
				this.readList()
			}
		},
		Prev(){
			console.log("prev",this.props.reading_id)
			if(this.props.reading_id>1){
				dispatch({
					type:"Prev",
					reading_id:Number(this.props.reading_id)-1
				})
				console.log("success",this.props.reading_id)
				this.readList()
			}else if(this.props.reading_id==1){
				this.readList()
			}
		}*/
	}
	
}) (Xreading_detail_content);