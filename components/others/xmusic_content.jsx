import React from 'react';
import "../../template/base.css";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import $ from "jQuery";
import {connect} from 'react-redux';
class Xmusic_content extends React.Component{
    constructor(props){
        super(props);
        this.state={
        	arr:[]
        	
        }
    }
	render(){
		return (
        <div className='music_list'>
        
        {
            function(self){
                return self.state.arr.map((item,index)=>{
                    return (
			            <div className='music_box' key={index} data-id={item.id} onClick={self.props.saveid}>
			                <div className="item-text link-div">
			                    <p className="text-tag">- 音乐 -</p>
			                    <p className="text-title ellipsis-row2">
			                        <b className="div-link">{item.title}</b>
			                    </p>
			                    <p className="text-author ellipsis-row1">文／{item.author}</p>
			                    <div className="text-music-cover">
			                        <div className="text-music-cover-background">&nbsp;</div>
			                        <div className="text-music-cover-img">
			                            <a href={'#/music_detail/'+item.id}>
			                            	<img className="lazy_img resize_img img_center_y" src={item.img} style={{display:'inline'}}/>
			                            </a>
			                        </div>
			                        <div className="music-play music-detail-status">
			                            <img className="play-btn" src="http://image.wufazhuce.com/play_btn_empty.png"/> 
			                        </div>
			                            <img src="http://image.wufazhuce.com/music_copyright_1.png" width="100%" className="platform-icon"/>
			                    </div>
			                    <p className="text-music-author ellipsis-row1">{item.text1}&nbsp;|&nbsp;{item.text1_en}</p>
			                    <p className="text-content-short ellipsis-row2">{item.text2}</p>
			                    <p className="date">{item.time}</p>
			                </div>
		            	</div>
		            	)
		             })
		          }(this)
		        }
        </div>
        )
	}
	componentDidMount(){
        var _this=this;
    		$.ajax({
    			url:"http://120.78.142.165:3000/getMusicAll",
    			type:"post",
    			dataType:"json",
    			success(data){					
					_this.setState({
						arr:data,
					})
				},
				error(){
					console.log('error');
				}
    		})
   }
}
export default Xmusic_content