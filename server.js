const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
//中间键实现给req身上加body的属性
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 中间键调用实现给req加上一个cookie属性，获取cookie；
app.use(cookieParser());



// app.get("/",(req,res)=>{
//     // res.write("hello express");
//     // res.end();
//     console.log(req.query);
//     res.send("hello express");
// });

// app.post("/handleLogin",(req,res) => {
//     // console.log(req.body);undefined
//     console.log(req.body);
//     // 没有req.body属性需要设置中间键
//     res.send("hello req.body");
// })

// app.get("/setcookie",(req,res) => {
//     res.cookie("uname","zahngsan",{
//         maxAge:1000*60*10,
//     });
//     res.send("cookie设置成功");
// })

// app.get("/getcookie",(req,res) => {
//     // console.log(req.cookies);undefined
//     console.log(req.cookies);
//     // 获取cookie需要调用中间键
//     res.send("cookie获取");
// })

//req.params获取路由的动态参数
// localhost:3000/hello/apple

// app.get("/hello/:id",(req,res) => {
//     // console.log(req.params);{id:apple}
//     res.send("我回来了");
// })

// localhost:3000/world/张三/18
app.get("/world/:name/:age",(req,res) =>{
    // console.log(req.params);{ name: '张三', age: '18' }
    res.send("hello world");
});


app.listen(3000);

