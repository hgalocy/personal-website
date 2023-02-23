let liList = []
window.onload = function (){
    let appendAfter = document.getElementById("projectList")
    let placardList = document.createElement('ul')
    placardList.id = "ulPlacardList"
    // fs.readFileSync("../files/projects/projectInfo.json")
    for (project in projectStrJSON){
        let name = project
        let title = projectStrJSON[project]["title"]
        let gitLink = projectStrJSON[project]["gitLink"]
        let pic = projectStrJSON[project]["pics"][0]
        let readMe = projectStrJSON[project]["readMe"]
        let recent = projectStrJSON[project]["recent"]
        let fav = projectStrJSON[project]["fav"]
        // let projLink = 
        
        let currProjectNode = new projectNode(name, title, gitLink, pic, readMe, recent, fav)
        let projectPlacard = currProjectNode.create()
        let li = document.createElement('li');
        li.insertAdjacentElement("beforeend", projectPlacard);
        placardList.appendChild(li);
        liList.push(currProjectNode) //store all projects in liList just in case ul changes on DOM
    }
    appendAfter.insertAdjacentElement("beforeend", placardList);
}

//sort drop down
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("sortDropDown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//sort depending on sort option
let lessRecentOpt = document.getElementById("lessRecentOpt")
let mostRecentOpt = document.getElementById("mostRecentOpt")
let myFavOpt = document.getElementById("myFavOpt")
liList = []
lessRecentOpt.onclick = function(event){
    //sort by least recent 
    //clear ul
    let ulPlacardList = document.getElementById("ulPlacardList")
    ulPlacardList.innerHTML = ""
    let mostCtr = 1
    console.log("here")
    while(ulPlacardList.getElementsByTagName("li").length<liList.length){ //until all li items added to ul
        console.log("here1")
        for (let i = liList.length; i>0; i--){
            if(liList[i-1].recent == mostCtr){
                console.log("here3")
                let li = document.createElement('li');
                li.insertAdjacentElement("beforeend", liList[i-1].projectPlacard);
                ulPlacardList.appendChild(li);
                mostCtr++;
            }
        }
    }
}
mostRecentOpt.onclick = function (event) {
    //sort by most recent 
    //clear ul
    let ulPlacardList = document.getElementById("ulPlacardList")
    ulPlacardList.innerHTML = ""
    let mostCtr = liList.length
    while(ulPlacardList.getElementsByTagName("li").length<liList.length){ //until all li items added to ul
        for (let i = liList.length; i>0; i--){
            if(liList[i-1].recent == mostCtr){
                let li = document.createElement('li');
                li.insertAdjacentElement("beforeend", liList[i-1].projectPlacard);
                ulPlacardList.appendChild(li);
                mostCtr--;
            }
        }
    }
}
myFavOpt.onclick = function (event) {
    //display only my favorite
    //clear ul
    let ulPlacardList = document.getElementById("ulPlacardList")
    ulPlacardList.innerHTML = ""

    for (let i = liList.length; i>0; i--){
        if(liList[i-1].fav == 1){
            let li = document.createElement('li');
            li.insertAdjacentElement("beforeend", liList[i-1].projectPlacard);
            ulPlacardList.appendChild(li);
            return;
        }
    }
}

//create project placards
class projectNode {
    constructor(name, title, gitLink, pic, readMe, recent, fav){
        this.name=name;
        this.title=title;
        this.gitLink=gitLink;
        this.pic=pic;
        this.readMe=readMe;
        // this.projLink=projLink;
        this.recent=recent;
        this.fav = fav;
    }
    create(){
        //create elements
        let placard = document.createElement("div");
        placard.classList.add("placard");

        let placardRow1 = document.createElement("div");
        placardRow1.classList.add("placard-row");
        let h2 = document.createElement("h2");
        h2.innerHTML = this.title;
        let gitLink = document.createElement("a");
        gitLink.innerHTML=this.gitLink;
        gitLink.href = this.gitLink;

        let placardRow2 = document.createElement("div");
        placardRow2.classList.add("placard-row");
        let img = document.createElement("img")
        img.src = this.pic;
        img.classList.add("main-pic");

        let placardCol = document.createElement("div");
        placardCol.classList.add("placard-col");
        let h3 = document.createElement("h3");
        h3.innerHTML = "Read Me:";
        let readMe = document.createElement("p");
        readMe.innerHTML = this.readMe;
        let moreBtn = document.createElement("button");
        moreBtn.classList.add("more-btn");
        moreBtn.innerHTML = "More";

        //organize elements in container
        placardCol.insertAdjacentElement("beforeend", h3);
        placardCol.insertAdjacentElement("beforeend", readMe);
        placardCol.insertAdjacentElement("beforeend", moreBtn);
    
        placardRow2.insertAdjacentElement("beforeend", img);
        placardRow2.insertAdjacentElement("beforeend", placardCol);

        placardRow1.insertAdjacentElement("beforeend", h2);
        placardRow1.insertAdjacentElement("beforeend", gitLink);

        placard.insertAdjacentElement("beforeend", placardRow1);
        placard.insertAdjacentElement("beforeend", placardRow2);

        //return singular element container
        this.projectPlacard = placard;
        return placard;
    }
}