const express = require("express")
const app = express();
const {readFile} = require("fs").promises;
const PORT = process.env.PORT || 3030;
const $ = require( "jquery" );
const path = require('path');
const router = express.Router();
var fs = require('fs');

app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.get("/", (request, response) =>{

//     readFile("pages/index.html", "utf8", (err, html) =>{

//         if(err){
//             response.status(500).send("can't find html")
//         }
//         response.send(html)
//     })
// })

// app.get("/", async (request, response) => {
//     response.sendFile(path.join(__dirname+"/index.html"))
//     // response.send(await readFile("public/pages/index.html", "utf8"))
// })

router.get('/',function(req,res){
    // res.sendFile(path.join(__dirname+'/public/pages/index.html'));
    res.render(path.join(__dirname+'/public/pages/index.ejs'))
});

router.get('/projectsList',function(req,res){
    let projectStrJSON = JSON.parse(fs.readFileSync(path.join(__dirname+"/public/files/projects/projectInfo.json"),'utf8'))//(error, data) => {

    res.render(path.join(__dirname+'/public/pages/projectsList.ejs'), {"projectStrJSON" : JSON.stringify(projectStrJSON)})
    // res.sendFile(path.join(__dirname+'/public/pages/projectsList.html'), );
});

router.get('/index',function(req,res){
    res.render(path.join(__dirname+'/public/pages/index.ejs'))
});

//add the router
app.use('/', router);
  
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
// app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))

//deploy on google cloud
//