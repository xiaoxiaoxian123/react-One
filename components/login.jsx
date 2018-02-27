import React from 'react';
import "../template/base.css";
import $ from "jQuery";
 class Xlogin extends React.Component{
     constructor(props){
        super(props)
        this.state={
        	Tel:''
        }
     }
	render(){
		return (
			<div>
				<div className="header-bg">
					<div className="bgimg">
						<img src="/img/logo.jpg" style={{width:'100%'}}/>
					</div>
				</div>
			<div className="content">
				<div className="login">
					<div className="login-item username">
						<span className="titile">用户名：</span>
						<input type="text"  onChange={this.getIunputValue.bind(this)} value={this.state.Tel}/>
						<span className="hidden">
							<i className="clearcon">×</i>
					        <em className="messshow">用户名不存在</em>
				        </span>
					</div>
					<div className="login-item password">
						<span className="titile">密&nbsp;&nbsp;&nbsp;码：</span>
						<input type="password" />
						<span className="hidden">
					        <i className="clearcon">×</i>
					        <em className="messshow">密码错误</em>
				        </span>
					</div>
				</div>
				<div className="login-btn">
					<span onClick={this.login.bind(this)}>登录</span>
				</div>
			</div>
			</div>
		)
	}
	getIunputValue(event){
        this.setState({
            Tel: event.target.value
        })
    }
	login(){
		var _this=this;
		$.ajax({
			url:"http://120.78.142.165:3000/getuser",
			type:"post",
			dataType:"json",
			data:{
				tel:_this.state.Tel
			},
			success(data){
				sessionStorage.setItem("name", data[0].name);
				location.href="#/index/music"
			},
			error(){
				console.log('error');
			}
		})
	}
}
export default Xlogin