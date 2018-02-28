import React from "react";
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	imgArr:[
    		{
    			staticImg:"http://120.78.142.165:3000/img/home.png",
    			activeImg:"http://120.78.142.165:3000/img/home_active.png"
    		},
    		{
    			staticImg:"http://120.78.142.165:3000/img/reading.png",
    			activeImg:"http://120.78.142.165:3000/img/reading_active.png"
    		},
    		{
    			staticImg:"http://120.78.142.165:3000/img/music.png",
    			activeImg:"http://120.78.142.165:3000/img/music_active.png"
    		},
    		{
    			staticImg:"http://120.78.142.165:3000/img/movie.png",
    			activeImg:"http://120.78.142.165:3000/img/movie_active.png"
    		}
    	],
    	selectId:0
    }
  }
  render() {
    return (
    	<div style={{
    		position:"fixed",
    		bottom:0,
    		left:0,
    		background: "#eee",width: "100%"
    	}}>
    		<a href="#/index/home" onClick={this.changeId.bind(this,0)}><img src={this.state.selectId==0?this.state.imgArr[0].activeImg:this.state.imgArr[0].staticImg} style={{width:"25%"}}/></a>
    		<a href="#/index/reading" onClick={this.changeId.bind(this,1)}><img src={this.state.selectId==1?this.state.imgArr[1].activeImg:this.state.imgArr[1].staticImg} style={{width:"25%"}} /></a>
    		<a href="#/index/music" onClick={this.changeId.bind(this,2)}><img src={this.state.selectId==2?this.state.imgArr[2].activeImg:this.state.imgArr[2].staticImg} style={{width:"25%"}}/></a>
    		<a href="#/index/video" onClick={this.changeId.bind(this,3)}><img src={this.state.selectId==3?this.state.imgArr[3].activeImg:this.state.imgArr[3].staticImg} style={{width:"25%"}}/></a>
    	</div>
    )
  }
  changeId(id,e){
  	this.setState({
  		selectId:id
  	})
  }
}
export default Xfooter;
