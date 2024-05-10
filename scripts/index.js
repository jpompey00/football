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

window.onload = function(){
    loadTeams();
};


function loadTeams(){
    for(let team of teams){
        let theOption = new Option(team.name, team.code);
        teamDropdown.append(theOption);
    }
}