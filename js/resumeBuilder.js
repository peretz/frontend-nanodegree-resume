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

var workExperience = {
    "Jobs": 
    [
        {
            "employer": "National Instruments",
            "position": "Staff Software Engineer",
            "years": "August 2012 - August 2017",
            "city": "Austin, TX",
            "tasks": 
            [
                "Integrated application, driver and hardware code in order to source and measure data.",
                "Combined a finite and a continuous scatter-gather-list, resulting in a 10x reduction of memory usage.",
                "Using a multithreaded solution, I ported a hardware feature to software.",
                "Reduced DMA streaming complexity from O(n2) to O(n/k), improving performance up to 1000%.",
                "Adapted flash memory code for its reuse with the old driver stack."
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
                "Re-architected code for its use with a new servo controller.",
                "Created and documented a motion control API; this API allows full control of our control board.",
                "Implemented software “best practices” such as source control, bug tracking, smoke testing, and periodic software releases."
            ]

        },
        {
            "employer": "Kurzweil Technologies",
            "position": "Software Engineer Intern",
            "years": "Summer 2008",
            "city": "Boston, MA",
            "tasks": 
            [
                "Using gradient descent, I optimized the calibration parameters for an OCR application."
            ]
        }
    ]
}

var education = {
    "schools":
    [
        {
            "school": "Columbia University",
            "city": "New York, NY",
            "degree": "MS",
            "major": "Electrical Engineering",
            "years": "2007 - 2008"
        },
        {
            "school": "ITESM",
            "city": "Mexico City, Mexico",
            "degree": "BS",
            "major": "Mechatronics Engineering",
            "years": "2002 - 2007"
        }
    ],
    "onlineTraining":
    [
        {
            "school": "Udacity",
            "title": "Full Stack Development Nanodegree",
            "years": "2017"
        },
        {
            "school": "Stanford University",
            "title": "Machine Learning",
            "years": "2016"
        }
    ]
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(var i = 0; i < bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $(".skills-h3").append(formattedSkill);
    }
}

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
