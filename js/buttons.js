/*Nav Menu Buttons*/
function mobileNavButton(){
    var x = document.getElementById("mainNav");
    var menuIcon = document.querySelector("#menuIcon span")
    if (x.className === "navBar") {
        x.className += " responsive";
        menuIcon.className="fa";
        menuIcon.className+=" fa-times";
    } else {
        x.className = "navBar";
        menuIcon.className="fa";
        menuIcon.className+=" fa-bars";
    }
}

function projDropdownButton(){
    var p = document.getElementById("projDropContent");
    var projIcon = document.getElementById("projIcon");
    if (p.className === "dropContent") {
        p.className += " dropVisible";
        projIcon.className="fa";
        projIcon.className+=" fa-caret-up";
    } else {
        p.className = "dropContent";
        projIcon.className="fa";
        projIcon.className+=" fa-caret-down";
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
    window.open('resources/User Manual.pdf', '_blank');
}

function clickPropButton(){
    window.open('resources/Proposal.pdf', '_blank');
}

function clickSRSButton() {
    alert("Please contact to request a copy of the SRS document");
}