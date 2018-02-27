var express = require("express");
var app = express();
var server = require('http').createServer(app);
var mysql = require("mysql");
app.use(express.static('../public'));
//创建数据库连接
var connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'2907lrh',
	database:'one'
})
// 处理post请求的请求体模块
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//开始连接
connect.connect();
app.post("/getVideo",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query('SELECT * FROM video', function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//根据id获取影视的详细信息
app.post("/getVideoAll",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM video where video_id = ${req.body.id}`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//显示音乐列表
app.post("/getMusicAll",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM music`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//显示音乐详情
app.post("/getMusicDetail",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM music where id = ${req.body.id}`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//显示评论
app.post("/getcomment",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM comment ORDER BY TIME DESC limit 3`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//插入评论
app.post("/showcomment",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`INSERT INTO comment( name, time, content, icon) VALUES ('${req.body.name}','${req.body.time}','${req.body.content}','${req.body.icon}')`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//改变评论
app.post("/changecomment",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM comment ORDER BY TIME DESC limit 3`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//获取用户信息
app.post("/getuser",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM user where tel='${req.body.tel}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
})
//获取所有的首页数据
app.post("/getAllOne",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	connect.query(`select * from tb_one  ORDER BY pic_date DESC`,function(error,results,fields){
		if(error)throw error;
		res.send(JSON.stringify(results));
	})
})
//通过id获取所有tb_one中的数据
app.post("/getOneById",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	connect.query(`select * from tb_one  where id='${req.body.id}'`,function(error,results,fields){
		if(error)throw error;
		res.send(JSON.stringify(results));
	})
})
//阅读列表页
app.post("/getReading",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query('SELECT * FROM reading', function(error, results, fields) {
		/*console.log(results);*/
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//根据id获取阅读的详细信息
app.post("/getReading_detail",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM reading where id = ${req.body.id}`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//监听端口
server.listen(3000)
console.log("开启服务器")
