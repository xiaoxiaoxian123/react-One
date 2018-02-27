import React from 'react';
import $ from 'jQuery';
// router
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import  '../../template/reading.css';
import {connect} from "react-redux";
class Xonereading extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			arr:[]
		}
	}
  render() {
   	 return (
   	 	<div className="reading_list">
	   	
	   	 	{
	   	 		function(self){
	   	 			return self.state.arr.map((item,index)=>{
	   	 				return (
	   	 					<a  href={"#/reading_detail/"+item.id} key={index}>
					 			<div className="reading_item_text"  data-id={item.id} onClick={self.props.showDetail.bind(self)}>
					 				<p className="reading_text_tag">{item.sort}</p>
					 				<p className="reading_text_title"><span  href="#">{item.title}</span></p>
					 				<p className="reading_text_author">{item.author}</p>
					 				<div className="reading_text_cover_img"><img src={item.pic} /></div>
					 				<p className="reading_text_content_short ">{item.text}</p>
					 				<p className="reading_date">{item.time}</p>
					 			</div>
					 		</a>
					 			)
			 			 })
		 			}(this)
		 		}
	   
	 		</div>
   	 )
  }
  componentDidMount(){
  	var _this = this;
	  	$.ajax({
			type:"post",
			url:"http://120.78.142.165:3000/getReading",
			dataType:"json",
			success(data){
				if(data.length!=0){
				_this.setState({
					arr: data
				})
			}
				/*console.log(_this.state.arr[0].id);*/
			},
			error(){
				console.log('error');
			}
		});
	}
}
export default connect((state)=>{
	console.log(state)
	return state
},(dispatch,props)=>{
	return {
		showDetail(e){
			dispatch({
				type:"readingId",
				id: e.currentTarget.getAttribute("data-id")
				
			})
		}
	}
}) (Xonereading);