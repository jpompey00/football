"use strict";
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    {
        code: "KAN", name: "Kansas City Chiefs",
        plays: "Kansas City, MO"
    },
];

const teamDropdown = document.getElementById("teamsDropdown");
const submitButton = document.getElementById("submitButton");
const outputTextBox = document.getElementById("outputTextBox");


window.onload = function(){
    loadTeams();
    //reminder this is saying "when this happens run this function"
    submitButton.onclick = onSubmitButtonClicked;
    //This is saying "make the result of this funciton = the variable."
    //submitButton.onclick = onSubmitButtonClicked()
};


function loadTeams(){
    for(let team of teams){
        let theOption = new Option(team.name, team.code);
        teamDropdown.append(theOption);
    }
}

function onSubmitButtonClicked(){
    //console.log(teamDropdown.value);
    for(let team of teams){
        if(teamDropdown.value == team.code){
            outputTextBox.textContent = 
            `Team: ${team.name}, Code: ${team.code}, Plays; ${team.plays}`;
        }
    }
}