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

// Work as dot notation.
var workExperience = {};
workExperience.position = "Staff Software Engineer";
workExperience.employer = "National Instruments";
workExperience.years = "August 2012 - August 2017";
workExperience.city = "Austin, TX";

// Education as bracket notation.
var education = {};
education["school"] = "Columbia University";
education["degree"] = "MS in Electrical Engineering";
education["years"] = "2007 - 2008";
education["city"] = "New York, NY";


// Header
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Contact Information
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

// Skills
$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(formattedSkills);
}

// Work Experience
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", workExperience.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", workExperience.position);
var formattedWorkDates = HTMLworkDates.replace("%data%", workExperience.years);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", workExperience.city);
$("#workExperience").append(formattedEmployer + formattedTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);

// Education
$("#education").append(HTMLschoolStart);
var formattedSchool = HTMLschoolName.replace("%data%", education["school"]);
var formattedDegree = HTMLschoolDegree.replace("%data%", education["degree"]);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["years"]);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["city"]);
$("#education").append(formattedSchool + formattedDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
