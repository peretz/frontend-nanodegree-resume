/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Jaime Peretzman",
    "role": "Software Engineer / Product Manager",
    "contacts": {
        "mobile": "+52-1-55-8426-0918",
        "email": "jaime@intermed.com.mx",
        "immigrationStatus": "US resident",
        "github": "github.com/peretz",
        "loc": "Austin, TX"
    },
    "welcomeMsg": "Software Engineer / Product Manager passionate about the healthcare industry and the current challenges in it.",
    "skills": [
        "Languages (advanced): C/C++14, LabVIEW.",
        "Languages (intermediate): python, HTML, CSS, javascript, SQL.",
        "Familiar with Agile and Lean development",
        "Experience with OOD and Design Patterns"
    ]
}

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedImmigrationStatus = HTMLimmigrationStatus.replace("%data%", bio.contacts.immigrationStatus);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.loc);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedImmigrationStatus);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for(var i = 0; i < bio.skills.length; i++){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}

var workExperience = {
    "Jobs": 
    [
        {
            "employer": "Clínica Intermed",
            "position": "CIO and CMO",
            "years": "September 2017 - Present",
            "city": "Mexico City, Mexico",
            "tasks": 
            [
                "Proposed and implemented a calendar application to schedule patient appointments. This application was 90% cheaper than the next proposal and free up 35% of the receptionists’ time.",
                "Using web-scraping techniques, gathered a database of medical specialists and created several outbound marketing campaigns. These campaigns generated an ROI of 205x.",
                "Adapted a home mesh network to our business, reducing 75% equipment costs."
            ]
        },
        {
            "employer": "National Instruments",
            "position": "Staff Software Engineer",
            "years": "August 2012 - August 2017",
            "city": "Austin, TX",
            "tasks": 
            [
                "Managed the full life-cycle of a software maintenance release. In this release, I used Kanban iterations and a project wiki to coordinate the different stakeholders. My efforts parallelized testing efforts and allowed an 8-month release cycle.",
                "Using three threads, I ported a HW feature to SW, considerably reducing the workload for the HW team.",
                "Mentored a junior engineer, who was a poor performer and who have had two previous mentors. After mentoring him, he was able to properly contribute to the team.",
                "Reduced DMA streaming complexity from O(n2) to O(n/k), improving performance up to 1000%."
            ]
        },
        {
            "employer": "Techno Inc",
            "position": "Software Engineer",
            "years": "March 2009 - August 2012",
            "city": "New Hyde Park, NY",
            "tasks": 
            [
                "Designed a user-friendly installer; the installer solved 15% of common technical support inquiries.",
                "Re-architected code for its use with a new servo controller. This reduced software development time more than 70%."
            ]

        },
        {
            "employer": "Kurzweil Technologies",
            "position": "Software Engineer Intern",
            "years": "Summer 2008",
            "city": "Boston, MA",
            "tasks": 
            [
                "Using gradient descent, I optimized the calibration parameters for an OCR application. This solution was 50% more accurate and 80% faster than the previous approach."
            ]
        }
    ]
}

workExperience.display = function() {
    function displayJob(activeJob) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", activeJob.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", activeJob.position);
        var formattedYears = HTMLworkDates.replace("%data%", activeJob.years);
        var formattedCity = HTMLworkLocation.replace("%data%", activeJob.city);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedYears);
        $(".work-entry:last").append(formattedCity);

        $(".work-entry:last").append(HTMLworkTasksStart);
        activeJob.tasks.forEach(function (activeTask) {
            var formattedTask = HTMLworkTasksItem.replace("%data%", activeTask);
            $(".tasks-entry:last").append(formattedTask);
        });
    }

    workExperience.Jobs.forEach(displayJob);
}

var education = {
    "schools":
    [
        {
            "name": "Columbia University",
            "city": "New York, NY",
            "degree": "MS",
            "major": "Electrical Engineering",
            "years": "2007 - 2008"
        },
        {
            "name": "Instituto Tecnologico y de Estudios Superiores de Monterrey (ITESM)",
            "city": "Mexico City, Mexico",
            "degree": "BS",
            "major": "Mechatronics Engineering",
            "years": "2002 - 2007"
        }
    ],
    "onlineTraining":
    [
        {
            "title": "Introduction to Relation Databases",
            "school": "Stanford University",
            "dates": "2017",
            "url": ""
        },
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": ""
        },
        {
            "title": "Functional Programming Principles in Scala",
            "school": "École Polytechnique Fédérale de Lausane (Coursera)",
            "dates": "2017",
            "url": ""
        },
        {
            "title": "Machine Learning",
            "school": "Stanford University (Coursera)",
            "dates": "2016",
            "url": ""
        }
    ]
}

education.displaySchools = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.years);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.city);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    });
}

education.displayOnlineTraining = function() {
    education.onlineTraining.forEach(function(onlineTraining) {
        $("#onlinetraining").append(HTMLonlineStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineTraining.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineTraining.school);
        var formattedDates = HTMLonlineDates.replace("%data%", onlineTraining.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", onlineTraining.url);
        $(".onlinetraining-entry:last").append(formattedTitle + formattedSchool + formattedDates);
        $(".onlinetraining-entry:last").append(formattedUrl);
    });
}

bio.display();
workExperience.display();
education.displaySchools();
education.displayOnlineTraining();

$("#mapDiv").append(googleMap);
