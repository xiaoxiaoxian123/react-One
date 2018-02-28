import React from 'react';

export default class Xheader extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isShowUl:false,
			isShowInput:false
		}
	}
  render() {
    return (<div>
      <header style={{
      	display:"flex",
      	justifyContent: "space-between",
		    alignItems: "center",
		    flexDirection: "row",
        height: "50px",
        padding:"0 20px",
        textAlign: "center",
        backgroundColor: "#fff"
        }}>
      			<img src={require("../public/img/icon_menu.png")}  onClick={this.showUl.bind(this)}/>
      			<span>ONE</span>
      			<img src={require("../public/img/search_min.png")} style={{width:"18px",height:"18px"}} onClick={this.showInput.bind(this)}/>
      </header>
      <ul className="sideMenu" style={{display:this.state.isShowUl?'block':'none'}}>
      	<li><a href="#">App下载</a></li>
      	<li><a href="#">关于</a></li>
      	<li><img src={'http://120.78.142.165:3000/img/close.png'} onClick={this.hideUl.bind(this)} style={{width:'35px'}}/></li>
      </ul>
      <div className="search_box" style={{display:this.state.isShowInput?'block':'none'}}>
	      <div className="search_input" >
	      	<input type="text" placeholder="请输入关键字"/>
	      	<img src={require("../public/img/search_active.png")}  />
	      	<img src={require("../public/img/close.png")} style={{width:"18px",height:"18px",marginRight:"20px",marginLeft:"20px"}} onClick={this.closeInput.bind(this)}/>
	      </div>
      </div>
    </div>)
  }
  showUl(){
  	this.setState({
  		isShowUl:true
  	})
  }
  hideUl(){
  	this.setState({
  		isShowUl:false
  	})
  }
  showInput(){
  	this.setState({
  		isShowInput:true
  	})
  }
  closeInput(){
  	this.setState({
  		isShowInput:false
  	})
  }
}
