import ReactDOM from 'react-dom';
import React from 'react'
// router
import { HashRouter as Router, Route, Link} from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//选项卡组件
import Xindex from "./components/tab/xindex.jsx";
import Xmusic_detail from "./components/tab/xmusic_detail.jsx";
import Xreading_detail from "./components/tab/xreading_detail.jsx";
import Xpicturedetail from "./components/tab/xpicturedetail.jsx";
import Xvdetail from "./components/others/xvdetail.jsx";
import Xlogin from "./components/login.jsx";
const store = createStore((state={
    name:"测试",
    src:"",
    isShowGallery:false,
    reading_id:"",
    videoId:"",
    vlength:0,
    src:'',
	isShow:false
},action)=>{
    switch(action.type){
     	case "changeSrc":
			return Object.assign({},state,{
				src:action.src,
				isShow:action.isShow
			})
			break;
     	case "changeVid":
    		return Object.assign({}, state, {
            	videoId: action.videoId,
            	vlength: action.vlength
          	})
    		break;
     	case "toNext":
    		return Object.assign({}, state, {
            	videoId: action.videoId,
          	})
    		break;
    	case "toPrev":
    		return Object.assign({}, state, {
            	videoId: action.videoId,
          	})
    		break;
    	case "readingId":
    		return Object.assign({}, state, {
            	reading_id: action.id
            })
    		break;
    	default:
     		return state
    }
})
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
				<Route path="/music_detail" component={Xmusic_detail}></Route>
                <Route path="/reading_detail" component={Xreading_detail}></Route>
                <Route path="/index" component={Xindex}></Route>
                <Route path="/picdetail/:id" component={Xpicturedetail}></Route>   
				<Route path="/vdetail" component={Xvdetail}></Route>
				<Route path="/login" component={Xlogin}></Route>
            </div>
        </Router>
    </Provider>
	,
	document.querySelector("#app"))