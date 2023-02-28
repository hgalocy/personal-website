const express = require("express")
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');
const router = express.Router();
var fs = require('fs');

app.use(express.static('public'));
app.set('view engine', 'ejs');
let projectStrJSON = JSON.parse(fs.readFileSync(path.join(__dirname+"/public/files/projects/projectInfo.json"),'utf8'))

//main page
router.get('/',function(req,res){
    res.render(path.join(__dirname+'/public/pages/index.ejs'), {"contact": "false"})
});

//project list page
router.get('/projectsList',function(req,res){
    res.render(path.join(__dirname+'/public/pages/projectsList.ejs'), {"projectStrJSON" : JSON.stringify(projectStrJSON)})
});

//back to main page
router.get('/index',function(req,res){
    res.render(path.join(__dirname+'/public/pages/index.ejs'), {"contact": "false"})
});

//contact section of main page
router.get("/contact",function(req,res){
    res.render(path.join(__dirname+'/public/pages/index.ejs'), {"contact": "true"})
});

//specific project page
for(key in projectStrJSON){
    router.get('/' + key, function(req,res){
        res.render(path.join(__dirname+'/public/pages/project.ejs'), {"projectStrJSON" : JSON.stringify(projectStrJSON)})
    });
}

//add the router
app.use('/', router);
  
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});