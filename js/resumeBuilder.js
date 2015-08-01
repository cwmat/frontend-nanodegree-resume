 // Data members
 var bio = {
    "name": "Chaz Mateer",
    "role": "GIS Analyst",
    "contacts": {
        "mobile": "703-336-2718",
        "email": "chaz.mateer@gmail.com",
        "github": "https://github.com/cwmat",
        "twitter": "@cwmat",
        "location": "Fredericksburg, Virginia"
    },
    "picture": "https://media.licdn.com/media/p/5/000/207/3dd/0a2197b.jpg",
    "welcome": "<p>Mr. Mateer is an analyst with (Company Name Removed), providing GIS analysis and research support for (Client Name Removed) projects and (Client Name Removed) communication strategies. Specifically, he focuses on applying GIS methodologies to map, analyze, and understand issues related to the environment and urban planning, as well as adding spatial functionality to stakeholder engagement strategies.</p>\
    <p>Prior to joining (Company Name Removed), Mr. Mateer worked as a GIS technician intern at Prince William Forest National Park in the Resource Management department. He managed and maintained the parks geospatial datasets, conducted a full GPS inventory of trail features, and produced a number of cartographic products for park events, decision making, and navigation. Additionally, he worked on multiple research projects that utilized GIS analysis. Most notably, his construction of a habitat suitability model for American chestnut trees was used to plan the reintroduction of blight resistant chestnuts into the park.</p>\
    <p>Mr. Mateer received his BS in environmental studies from Virginia Commonwealth University and has a certificate in GIS with a concentration in defense and intelligence from George Mason University.</p>",
    "skills": ["images/geo.jpg", "images/prog.jpg", "images/write.jpg", "images/carto.jpg"]
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
        "employer": "Prince William National Forest",
        "title": "GIS Technician Intern",
        "dates": "May 2012 - September 2012",
        "location": "Prince William, Virginia",
        "description": "Edam paneer cheesy feet. Taleggio stilton cheese and biscuits melted cheese babybel halloumi red leicester croque monsieur. Melted cheese cut the cheese feta cheese triangles croque monsieur caerphilly melted cheese bavarian bergkase. Cheesy grin cheese strings bavarian bergkase bavarian bergkase manchego hard cheese airedale fromage frais. Fromage frais."
    }, {
        "employer": "(Company Name Removed)",
        "title": "Researcher",
        "dates": "November 2012 - June 2014",
        "location": "Fredericksburg, Virginia",
        "description": "Fondue cheese strings croque monsieur. Cheese and biscuits gouda pecorino stinking bishop cheese slices mascarpone ricotta everyone loves. Say cheese edam boursin red leicester gouda brie mozzarella cut the cheese. Cheeseburger smelly cheese when the cheese comes out everybody's happy parmesan parmesan st. agur blue cheese."
    }, {
        "employer": "(Company Name Removed)",
        "title": "Analyst",
        "dates": "June 2014 - Current",
        "location": "Fredericksburg, Virginia",
        "description": "Brie monterey jack smelly cheese. Red leicester manchego manchego airedale cheese triangles halloumi chalk and cheese rubber cheese. Queso when the cheese comes out everybody's happy cheese strings cheddar parmesan danish fontina monterey jack gouda."
    }]
}

var projects = {
    "projects": [{
        "title": "John Snow Mapping Demo",
        "dates": "2015",
        "description": "The Broad Street cholera outbreak was a severe outbreak of cholera that occurred near Broad Street in Soho district of London, England in 1854. This outbreak is best known for the physician John Snow's study of the outbreak and his discovery that cholera is spread by contaminated water. This discovery came to influence public health and the construction of improved sanitation facilities beginning in the 19th century. Later, the term 'focus of infection' would be used to describe places like the Broad Street pump in which conditions are ripe for transmission of an infection.",
        "images": [
            "images/john_snow1.jpg",
            "images/john_snow2.jpg",
            "images/john_snow3.jpg"
        ]
    },
    {
        "title": "Tour of my favorite places in RVA",
        "dates": "2015",
        "description": "Richmond is the capital of the Commonwealth of Virginia, in the United States. It is the center of the Richmond Metropolitan Statistical Area (MSA) and the Greater Richmond Region; since 1871 Richmond has been an independent city.  As of the 2010 census, the population was 204,214; in 2014, the population was estimated to be 217,853, the fourth-most populous city in Virginia. The Richmond Metropolitan Area has a population of 1,260,029.",
        "images": [
            "images/richmond_1.jpg",
            "images/richmond_2.jpg",
            "images/richmond_3.jpg"
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
  for (var skill in this.skills) {
    var formattedSkill = replaceData(HTMLslickyEntry, this.skills[skill]);
    $(".slicky").append(formattedSkill);
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
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x ,y);
});

// Slick carosel
$(document).ready(function(){
  $('.slicky').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      responsive : [
        {
          breakpoint: 750,
          settings: {
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
});

// Map
$('#map-div').append(googleMap);

// Call the display functions
projects.display();
bio.display();
work.display();
education.display();
