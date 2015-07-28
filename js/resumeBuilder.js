 // Data members
 var bio = {
    "name": "Chaz Mateer",
    "role": "GIS Analyst / Spaghettimancer",
    "contacts": {
        "mobile": "703-336-2718",
        "email": "chaz.mateer@gmail.com",
        "github": "www.github.com",
        "twitter": "@cwmat",
        "location": "Fredericksburg, Virginia"
    },
    "picture": "images/chaz.jpg",
    "welcome": 'Welcome to my "in no way serious" resume!  Seriously...  this is just a placeholder for now!',
    "skills": ["geospatial analysis", "programming", "technical writing", "cartography"]
}

var education = {
    "schools": [{
        "name": "Virginia Commonwealth University",
        "city": "Richmond, Virginia",
        "degree": "Bachelor of Science",
        "major": ["Environmental Studies"],
        "dates": "2012",
        "url": "#"
    }, {
        "name": "George Mason University",
        "city": "Manassas, Virginia",
        "degree": "Proffesional Certificate",
        "major": ["Geographic Information Systems: Concentration in Defense and Intelligence"],
        "dates": "2013",
        "url": "#"
    }, {
        "name": "Harvard Extension School",
        "city": "Online / Cambridge, Massachusetts",
        "degree": "Master of Arts",
        "major": ["Information Technology: Concentration in Software Engineering"],
        "dates": "Still Enrolled",
        "url": "#"
    }], 
    "onlineCourses": [{
      "title": "Front End Development Nanodegree",
      "school": "Udacity",
      "dates": "Current",
      "url": "https://www.udacity.com"
    },
    {
      "title": "Learn Python the Hard Way",
      "school": "Zed Shaw",
      "dates": "January 2014",
      "url": "http://learnpythonthehardway.org/"
    }]
}

var work = {
    "jobs": [{
        "employer": "Marstel-Day, LLC",
        "title": "Intern",
        "dates": "November 2012 - February 2013",
        "location": "Fredericksburg, Virginia",
        "description": "Brie monterey jack smelly cheese. Red leicester manchego manchego airedale cheese triangles halloumi chalk and cheese rubber cheese. Queso when the cheese comes out everybody's happy cheese strings cheddar parmesan danish fontina monterey jack gouda."
    }, {
        "employer": "Marstel-Day, LLC",
        "title": "Researcher",
        "dates": "February 2013 - June 2014",
        "location": "Fredericksburg, Virginia",
        "description": "Brie monterey jack smelly cheese. Red leicester manchego manchego airedale cheese triangles halloumi chalk and cheese rubber cheese. Queso when the cheese comes out everybody's happy cheese strings cheddar parmesan danish fontina monterey jack gouda."
    }, {
        "employer": "Marstel-Day, LLC",
        "title": "Analyst",
        "dates": "June 2014 - Current",
        "location": "Fredericksburg, Virginia",
        "description": "Brie monterey jack smelly cheese. Red leicester manchego manchego airedale cheese triangles halloumi chalk and cheese rubber cheese. Queso when the cheese comes out everybody's happy cheese strings cheddar parmesan danish fontina monterey jack gouda."
    }]
}

var projects = {
    "projects": [{
        "title": "Moopster",
        "dates": "2015",
        "description": "Brie monterey jack smelly cheese. Red leicester manchego manchego airedale cheese triangles halloumi chalk and cheese rubber cheese. Queso when the cheese comes out everybody's happy cheese strings cheddar parmesan danish fontina monterey jack gouda.",
        "images": [
            "images/moops.jpg",
            "images/moops.jpg",
            "images/moops.jpg"
        ]
    },
    {
        "title": "Spaghetti",
        "dates": "2015",
        "description": "Brie monterey jack smelly cheese. Red leicester manchego manchego airedale cheese triangles halloumi chalk and cheese rubber cheese. Queso when the cheese comes out everybody's happy cheese strings cheddar parmesan danish fontina monterey jack gouda.",
        "images": [
            "images/spaghetti.jpg",
            "images/spaghetti.jpg",
            "images/spaghetti.jpg"
        ]
    }]
}

// Display functions
// Projects
projects.display = function() {
  for (var project in this.projects) {
    var currentProject = this.projects[project];
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", currentProject.title);
    var formattedDates = HTMLprojectDates.replace("%data%", currentProject.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", currentProject.description);

    $('#projects:last').append(formattedTitle);
    $('#projects:last').append(formattedDates);
    $('#projects:last').append(formattedDescription);
    
    // Iterate through images  could add an if statement here to see if there are greater than 0 images
    for (var image in currentProject.images) {

      var formattedImage = HTMLprojectImage.replace("%data%", currentProject.images[image]);
      $('#projects').append(formattedImage);
    }

  }
}

// Bio
bio.display = function() {
  var formattedHeaderRole = replaceData(HTMLheaderRole, this.role);
  $("#header").prepend(formattedHeaderRole);
  var formattedHeaderName = HTMLheaderName.replace("%data%", this.name)
  $("#header").prepend(formattedHeaderName);
  // Top contacts
  var formattedMobile = replaceData(HTMLmobile, this.contacts.mobile);
  $('#topContacts').append(formattedMobile);
  var formattedEmail = replaceData(HTMLemail, this.contacts.email);
  $('#topContacts').append(formattedEmail);
  var formattedTwitter = replaceData(HTMLtwitter, this.contacts.twitter);
  $('#topContacts').append(formattedTwitter);
  var formattedGithub = replaceData(HTMLgithub, this.contacts.github);
  $('#topContacts').append(formattedGithub);
  var formattedLocation = replaceData(HTMLlocation, this.contacts.location);
  $('#topContacts').append(formattedLocation);
  // Welcome and bio pic
  var formattedBioPic = HTMLbioPic.replace("%data%", this.picture)
  $("#header").append(formattedBioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcome)
  $('#header').append(formattedWelcomeMsg);
  $('#header').append(HTMLskillsStart);
  for (var skill in this.skills) {
    var formattedSkill = replaceData(HTMLskills, this.skills[skill]);
    $("#header").append(formattedSkill);
  }
  // Footer contacts
  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedGithub);
  $('#footerContacts').append(formattedLocation);
}

//Work
work.display = function() {
  for(var job in this.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedWorkEmployer = replaceData(HTMLworkEmployer, this.jobs[job].employer);
    var formattedWorkTitle = replaceData(HTMLworkTitle, this.jobs[job].title);
    $("#workExperience").append(formattedWorkEmployer + formattedWorkTitle);
    var formattedWorkDates = replaceData(HTMLworkDates, this.jobs[job].dates);
    $("#workExperience").append(formattedWorkDates);
    var formattedWorkLocation = replaceData(HTMLworkLocation, this.jobs[job].location);
    $("#workExperience").append(formattedWorkLocation);
    var formattedWorkDescription = replaceData(HTMLworkDescription, this.jobs[job].description);
    $("#workExperience").append(formattedWorkDescription);
  }
}

// Education
education.display = function() {
  for (var school in this.schools) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = replaceData(HTMLschoolName, this.schools[school].name);
    var formattedSchoolDegree = replaceData(HTMLschoolDegree, this.schools[school].degree);
    $('#education').append(formattedSchoolName + formattedSchoolDegree);
    var formattedSchoolDates = replaceData(HTMLschoolDates, this.schools[school].dates);
    $('#education').append(formattedSchoolDates);
    var formattedSchoolLocation = replaceData(HTMLschoolLocation, this.schools[school].city);
    $('#education').append(formattedSchoolLocation);
    var formattedSchoolMajor = replaceData(HTMLschoolMajor, this.schools[school].major);
    $('#education').append(formattedSchoolMajor);
  }
  $('#education').append(HTMLonlineClasses);
  for (var course in this.onlineCourses) {
    var formattedOnlineTitle = replaceData(HTMLonlineTitle, this.onlineCourses[course].title);
    var formattedOnlineSchool = replaceData(HTMLonlineSchool, this.onlineCourses[course].school);
    $('#education').append(formattedOnlineTitle + formattedOnlineSchool);
    var formattedOnlineDates = replaceData(HTMLonlineDates, this.onlineCourses[course].dates);
    $('#education').append(formattedOnlineDates);
    var formattedOnlineURL = replaceData(HTMLonlineURL, this.onlineCourses[course].url);
    $('#education').append(formattedOnlineURL);
  }
}

// Click function
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;

//   logClicks(x ,y);
// });

// Map
$('#map-div').append(googleMap);

// Call the display functions
projects.display();
bio.display();
work.display();
education.display();
