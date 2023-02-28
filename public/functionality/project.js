let currProject = window.location.href.substring(window.location.href.lastIndexOf('/')+1,window.location.href.length)
console.log("current project page: " + currProject)

window.onload = function (){
    //add in json elements
    document.getElementById("projectTitle").innerHTML = projectStrJSON[currProject]["title"]
    document.getElementById("img1").src = projectStrJSON[currProject]["pics"][0]
    document.getElementById("img2").src = projectStrJSON[currProject]["pics"][1]
    document.getElementById("img3").src = projectStrJSON[currProject]["pics"][2]
    document.getElementById("img4").src = projectStrJSON[currProject]["pics"][3]
    if (projectStrJSON[currProject]["pics"].length > 4){ //add more pics if more than 4
        let insertHere = document.getElementById("img4")
        for (let i = 4; i<projectStrJSON[currProject]["pics"].length; i++){
            newPic = document.createElement("img")
            newPic.src = projectStrJSON[currProject]["pics"][i]
            newPic.id = "img"+(i+1).toString()
            insertHere.insertAdjacentElement("afterend", newPic)
        }
    }
    document.getElementById("read1").innerHTML = projectStrJSON[currProject]["readMe"]
    document.getElementById("read2").innerHTML = projectStrJSON[currProject]["captions"][0]
    document.getElementById("read3").innerHTML = projectStrJSON[currProject]["captions"][1]
    document.getElementById("read4").innerHTML = projectStrJSON[currProject]["captions"][2]
}

addEventListener("resize", (event) => {
    if(window.innerWidth < 1200){
        document.getElementById("gitCard").className = "fab fa-github fa-5x";
    }
    else{
        document.getElementById("gitCard").className = "fab fa-github fa-10x";
    }
});