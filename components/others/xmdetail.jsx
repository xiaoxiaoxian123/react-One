import React from 'react';
import "../../template/base.css";
import {connect} from 'react-redux';
import $ from "jQuery";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import "../../template/reading.css";
class Xmdetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
        	obj:{
        		img1:""
        	},
        	mid:0,
        	img:true,
        	comment:false,
        	arr1:[],
        	search:'',
        	showDailog:false,
        	showDailog2:false,
        	loginBox:false
        }
    }
	render(){
		return (
            <div className="music_detail" >
                <div className="text-detail">
	                <div style={{position:'relative',clear:'both',height:'356px'}}>
	                <div style={{position:'absolute',left:'-186px',top:'-134px',width:'490px',height:'490px',borderRadius:'245px 245px 245px 0px',boxShadow:'0 0 20px 5px rgba(230,230,230,0.6)'}}>
	                    &nbsp;</div>
	                <div style={{position:'absolute',left:'-168px',top:'-116px',width:'454px',height:'454px',borderRadius:'227px 227px 227px 226px',backgroundImage:"url("+this.state.obj.img1+")",backgroundSize:'cover', overflow:'hidden'}}>
	                    &nbsp;</div>
	                <div onClick={this.changeImg.bind(this)} style={{position:'absolute',left:'95px',top:'100px',width:'72px',height:'72px'}} id="music-play-btn" className="music-detail-status">
	                    <img src="http://image.wufazhuce.com/music-detail-play.png" style={{width:"100%",display:this.state.img?"block":"none"}} className="play-btn one-image-exclude"/>
	                    <img src="http://image.wufazhuce.com/music-detail-pause.png" style={{width:"100%",display:this.state.img?"none":"block"}} className="pause-btn one-image-exclude"/>
	                    <audio id="mp3box" src={this.state.obj.audio} loop></audio>
	                </div>
	                <div style={{display:'none'}} id="popupXiamiMusic-placeholder"></div>
            	</div>
        	</div>
	        <div className="text-music-info">
	            <div>{this.state.obj.text1}</div>
	            <div>{this.state.obj.text1_en}</div>
	            <div>{this.state.obj.author}</div>
	        </div>
	        <div className="text-title" style={{marginTop:'30px',textAlign:'center'}}>{this.state.obj.text2}</div>
	        <div className="text-simple-author">文／{this.state.obj.author}</div>
        <div className="text-content" dangerouslySetInnerHTML={{ __html: this.state.obj.content }}></div>
	    <p className="page-sparate-title">作者</p>
	    <hr className="sort-separate-line"/>
	    <table className="page-table">
        	<tbody>
	            <tr>
	                <td style={{width: "50px"}}>
	                    <img className="one-image-exclude avater" src="http://image.wufazhuce.com/Flenoszs07hezZZsvn44LZzsfhX0" alt={this.state.obj.author}/>
	                </td>
	                <td>
	                    <div className="page-title">{this.state.obj.author}
	                        <span style={{fontSize: '10px'}}>&nbsp;</span>
	                    </div>
	                    <div className="page-summary" >“年粤日”公众号作者。</div>
	                </td>
	            </tr>
        	</tbody>
    	</table>
    	<div style={{margin: '10px 20px',height:'35px',display:this.state.comment?'block':'none'}}>
	    	<div style={{float:'left',border:'1px solid #ddd',width:'200px',borderRadius:'10px',height:'30px'}}>
	    		<input type='text' onChange={this.getIunputValue.bind(this)} value={this.state.search} style={{border:'none',outline:'none',height:'17px',paddingLeft:'10px'}}/>	
	    	</div>
	    	<span onClick={this.sendcomment.bind(this)} style={{width:'45px',height:'30px',lineHeight:'30px',textAlign:'center',float:'right',border:'1px solid #ddd',borderRadius:'10px',fontSize:'14px',color:'#888'}}>发表</span>
    	</div>
    	<div style={{height:'27px',marginRight:'20px'}}>
	    	<p className="page-sparate-title" style={{float:'left',marginTop:'0px'}}>评论内容</p>
	    	<img src='/img/comment.png' onClick={this.commentImg.bind(this)} style={{float:'right',width:'25px'}}/>
	    </div>
	    <hr className="sort-separate-line"/>
	    <table className="page-table">
        	<tbody>
        	{
            function(self){
                return self.state.arr1.map((item,index)=>{
                    return (
		            	<tr key={index}>
			                <td style={{width: "20px"}}>
			                    <img className="one-image-exclude avater-small" src={item.icon}/>
			                </td>
			                <td>
			                    <div className="comment-user-info">
			                        <ul>
			                            <li>{item.name}</li>
			                            <li>{item.time}</li>
			                        </ul>
			                    </div>
			                    <div className="comment-content">{item.content}</div>
			                </td>
			            </tr>
			        	)
		             })
		          }(this)
		        }
        	</tbody>
    	</table>
    	<div id="toast1" style={{opacity:this.state.showDailog?1:0,display:this.state.showDailog?'block':'none'}}>
	        <div className="weui-mask_transparent" onClick={this.hide.bind(this)}></div>
	        <div className="weui-toast" >
	            <i className="weui-icon-success-no-circle weui-icon_toast"></i>
	            <p className="weui-toast__content">最后一篇</p>
	        </div>
    	</div>
    	<div id="toast2" style={{opacity:this.state.showDailog2?1:0,display:this.state.showDailog2?'block':'none'}}>
	        <div className="weui-mask_transparent" onClick={this.hide2.bind(this)}></div>
	        <div className="weui-toast" >
	            <i className="weui-icon-success-no-circle weui-icon_toast"></i>
	            <p className="weui-toast__content">第一篇</p>
	        </div>
    	</div>
    	<div className="js_dialog" id="iosDialog2" style={{opacity:this.state.loginBox?1:0,display:this.state.loginBox?'block':'none'}}>
            <div className="weui-mask"></div>
            <div className="dialog">
                <div className="weui-dialog__bd">登录了才能发表评论呦</div>
                <div className="weui-dialog__ft">
                    <a href="#/login" className="weui-dialog__btn weui-dialog__btn_primary">去登录</a>
                </div>
            </div>
        </div>
	    <div className="download">
		    <a href="##"  className="ui-link">
		        <img alt="「ONE · 一个」" className="one-image-exclude logo-img" src="http://image.wufazhuce.com/app_download.png"/>
		    </a>
		    <p className="download-text">下载「一个」APP</p>
		</div>
		<div className="footer">
			<span onClick={this.sub_id.bind(this)}>上一篇</span>
			<a href="#/index/music">返回</a>
			<span onClick={this.add_id.bind(this)}>下一篇</span>
		</div>
    </div>
    
        )
	}
	//显示数据
	componentDidMount(){
        var _this=this;
        var detail_url=window.location.href.split("/")
        {/*获取内容*/}
		$.ajax({
			url:"http://120.78.142.165:3000/getMusicDetail",
			type:"post",
			dataType:"json",
			data:{
				id:Number(detail_url[detail_url.length-1])
			},
			success(data){					
				_this.setState({
					obj:data[0],
					mid:data[0].id
				})
			},
			error(){
				console.log('error');
			}
		})
		//获取评论
		$.ajax({
			url:"http://120.78.142.165:3000/getcomment",
			type:"post",
			dataType:"json",
			success(data){					
				_this.setState({
					arr1:data
				})
			},
			error(){
				console.log('error');
			}
		})
   	}
	//下一篇
	add_id(){
		var _this=this;	
    		$.ajax({
    			url:"http://120.78.142.165:3000/getMusicDetail",
    			type:"post",
    			dataType:"json",
    			data:{
    				id:Number(_this.state.mid)+1
    			},
    			success(data){
    				if(data!=''){
					_this.setState({
						obj:data[0],
						mid:data[0].id
					})
					location.href="#/music_detail/"+Number(_this.state.mid)
				}else{
					_this.setState({
						showDailog:true
					})
				}
				},
				error(){
					console.log('error');
				}
    		})
    }
	//上一篇
	sub_id(){
		var _this=this;
    		$.ajax({
    			url:"http://120.78.142.165:3000/getMusicDetail",
    			type:"post",
    			dataType:"json",
    			data:{
    				id:Number(_this.state.mid)-1
    			},
    			success(data){					
					if(data!=''){
					_this.setState({
						obj:data[0],
						mid:data[0].id
					})
					location.href="#/music_detail/"+Number(_this.state.mid)
				}else{
					_this.setState({
						showDailog2:true
					})
				}
				},
				error(){
					console.log('error');
				}
    		})
	}
	//关闭弹出层1
	hide(){
		this.setState({
			showDailog:!this.state.showDailog
		})
	}
	hide2(){
		this.setState({
			showDailog2:!this.state.showDailog2
		})
	}
	//播放音乐
	changeImg(){
		var audio = document.getElementById('mp3box');
		this.setState({
			img:!this.state.img
		})	
		if(audio.paused){ //如果当前是暂停状态
            audio.play();//播放
            return;
        }
        audio.pause(); //暂停
	}
	//显示评论框
	commentImg(){
		this.setState({
			comment:!this.state.comment
		})	
	}
	//获取评论内容
	 getIunputValue(event){
        this.setState({
            search: event.target.value
        })
    }
	 //将评论内容存入数据库,然后显示在页面上
	 sendcomment(){	 
	 	var _this=this;
	 	if(sessionStorage.length>=1){
		 	this.setState({
	            search:'',
	            comment:!this.state.comment
	        })
    		$.ajax({
    			url:"http://120.78.142.165:3000/showcomment",
    			type:"post",
    			dataType:"json",
    			data:{
    				content:_this.state.search,
    				name:sessionStorage.getItem("name"),
    				time:new Date().toLocaleTimeString(),
    				icon:"/img/music1.jpg"
    			},
    			success(data){					
					$.ajax({
						url:"http://120.78.142.165:3000/changecomment",
						type:"post",
						dataType:"json",
						success(data){
							console.log(data)
							_this.setState({
								arr1:data
							})
						},
						error(){
							console.log('error');
						}
					})		
				},
				error(){
					console.log('error');
				}
    		})
    	}else if(sessionStorage.length==0){
    		this.setState({
            	loginBox:!this.state.loginBox
        	})
    	}
	 }
}
export default Xmdetail