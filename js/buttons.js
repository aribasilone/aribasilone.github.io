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