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

// window.onload = function (){
//     fs.readFileSync("../files/projects/projectInfo.json")
//     for (key in projectJSON){
//         console.log("key: "  +  key)
//         // let name =
//         // let title = 
//         // let gitLink = 
//         // let pic = 
//         // let readMe = 
//         // let projLink =
//     } 
// }

//load the projects listed in the json file
class projectNode {
    constructor(name, title, gitLink, pic, readMe, projLink){
        this.name=name;
        this.title=title;
        this.gitLink=gitLink;
        this.pic=pic;
        this.readMe=readMe;
        this.projLink=projLink;
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
        return placard;
    }
}