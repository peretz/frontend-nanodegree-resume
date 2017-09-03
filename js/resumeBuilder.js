/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Jaime Peretzman",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "914-450-9710",
        "email": "peretzman@caa.columbia.edu",
        "twitter": "",
        "github": "peretz",
        "blog": "",
        "loc": "Austin, TX"
    },
    "picture": "images/fry.jpg",
    "welcomeMsg": "Welcome to my resume.",
    "skills": [
        "Software Development", "C++", "Multithreading", 
    ]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.loc);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedPic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(formattedSkills);
}

