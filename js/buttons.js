/*Nav Menu Buttons*/
function mobileNavButton(elm){
    var x = document.getElementById("mainNav");
    var menuIcon = document.querySelector("#menuIcon span")
    if (x.className === "navBar") {
        x.className += " responsive";
        menuIcon.className="fa";
        menuIcon.className+=" fa-times";
        elm.setAttribute('aria-expanded', "true");
    } else {
        x.className = "navBar";
        menuIcon.className="fa";
        menuIcon.className+=" fa-bars";
        elm.setAttribute('aria-expanded', "false");
    }
}

function projDropdownButton(elm){
    var p = document.getElementById("projDropContent");
    var projIcon = document.getElementById("projIcon");
    if (p.className === "dropContent") {
        p.className += " dropVisible";
        projIcon.className="fa";
        projIcon.className+=" fa-caret-up";
        elm.setAttribute('aria-expanded', "true");
    } else {
        p.className = "dropContent";
        projIcon.className="fa";
        projIcon.className+=" fa-caret-down";
        elm.setAttribute('aria-expanded', "false");
    }
}

/*General Buttons*/
function contactButton(){
    var link = "mailto:abasilone.hba2020@ivey.ca"
            + "?subject=Arianna Basilone Freelance - Request for Quote"
            + "&body=Please send a high-level summary of the task/project and your contact information!";
    
    window.location.href = link;
    // alert("If your default mail client does not automatically open, please email me at abasilone.hba2020@ivey.ca")            
}

function collabButton(){
    var link = "mailto:abasilone.hba2020@ivey.ca"
            + "?subject=Arianna Basilone - Collaboration Opportunity"
            + "&body=Please send a high-level summary of the project, idea, or start-up you'd believe I'd be a good fit for. As well, briefly describe the capacity in which I would be assiting, and your contact information!";
    
    window.location.href = link;      
}

/*Capstone specific buttons*/

function clickUserManButton(){
    window.open('resources/docs/User Manual.pdf', '_blank');
}

function clickPropButton(){
    window.open('resources/docs/Proposal.pdf', '_blank');
}

function clickSRSButton() {
    alert("Please contact to request a copy of the SRS document");
}

/*Resume specific buttons*/

function pdfViewButton(){
    window.open('resources/docs/Arianna_Basilone_Resume_2022.pdf', '_blank');
}

function showContentsKeyPress(e,section){
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode === 13)
    {
        showContents(section);
    }
}

function showContents(section){
    try{
        Array.prototype.forEach.call(contents, elm => {
            if (elm.id == section || (section=="Work_Experience" && (elm.id=="Tech_Experience" || elm.id =="Business_Experience"))){
                elm.className = "content activeContent";
            }
            else{
                elm.className="content";
            }           
        });   
        
        window.location.href="#"+section;
    }catch{

    }
    
}

try {
    var contents = document.getElementsByClassName('content');
}
catch(err) {
    console.log("Not Resume page");
}
