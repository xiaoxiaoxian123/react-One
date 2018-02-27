import React from "react";
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	imgArr:[
    		{
    			staticImg:"/img/home.png",
    			activeImg:"/img/home_active.png"
    		},
    		{
    			staticImg:"/img/reading.png",
    			activeImg:"/img/reading_active.png"
    		},
    		{
    			staticImg:"/img/music.png",
    			activeImg:"/img/music_active.png"
    		},
    		{
    			staticImg:"/img/movie.png",
    			activeImg:"/img/movie_active.png"
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
