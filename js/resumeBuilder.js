var formattedName = HTMLheaderName.replace("%data%", "Jimmy Nguyen");

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": 'Jimmy Nguyen',
	"role": 'Leader',
	"linkedin": 'https://www.linkedin.com/in/jimmy-nguyen-7692a55',
	"welcomeMessage": 'Welcome to my Webspace! Below you can learn \
	a bit more about me, my projects, accomplishments, and work history.',
	"contacts": {
		"mobile": "(949) 302-1441",
		"email": "jimmyn949@gmail.com",
		"gitHubName": "MangoWolf",
		"location": "San Francisco, CA"
	},
	"bioPic": "http://placekitten.com/g/200/300",
	"skills": ["Advanced Excel", "Powerpoint", "Visio", "MS Project", "SQL",
	"Balsalmiq", "Salesforce", "Python", "Javascript", "PHP", "HTML", "CSS",
	"XML"]
};

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$('#topContacts').append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$('#topContacts').append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHubName);
$('#topContacts').append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$('#topContacts').append(formattedLocation);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$('#header').append(formattedWelcomeMsg);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBiopic);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(i=0; i < bio.skills.length; i++){

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

var work = {
	"jobs": [
	{
		"employer": "TrackerCorp",
		"title": "Associate Project/Product Manager",
		"location": "San Francisco",
		"dates": "2012 - Present",
		"description": "Enhance the company’s premier new I-9 Resolve product line\
		through the Agile SDLC, from ideation to documentation to development to\
		QA to market introduction. Draft requirements documentation including use\
		cases, scenarios, feature descriptions, UI mockups, and business process\
		flowchart diagrams. Successfully co-lead major components of a \
		$10M implementation project for a Fortune 100 client while working cross\
		functionally with various internal and external stakeholders to reduce\
		client’s compliance risk by $100M. Develop a new methodology for the\
		conversion and remediation lifecycle that scaled processing from 20K Form\
		I-9’s for smaller clients to over 700K+ Form I-9’s for enterprise clients.\
		Analyze risk, generate reports, and provide insight to customer/product\
		needs. Lead software implementation of several projects concurrently and\
		subsequently fulfilled account management duties."
	},
	{
		"employer": "Camargue Technologies, Inc.",
		"title": "Operations Coordinator/Solutions Analyst",
		"location": "San Francisco",
		"dates": "2011 - 2012",
		"description": "For start-up technology firm, research and aggregate\
		market data using resources such as Lexis-Nexis and Hoovers to assess\
		opportunity for online arbitration. Synthesize and report data pertaining\
		to arbitration laws, market conditions and competitive landscape.\
		Develop business plan that accurately reflects opportunities and\
		challenges in online arbitration market. Work with development team\
		to draft requirements documentation, including use cases, scenarios,\
		feature descriptions and business process flowchart diagrams.\
		Quality assurance testing for website development."
	},
	{
		"employer": "24-7 Commercial Marketing",
		"title": "Risk Analyst",
		"location": "Santa Monica",
		"dates": "2008 - 2010",
		"description": "Using software search tools including MySQL, tracked,\
		analyzed, and reported trends in 20M+ member database of $100M payment\
		processing and pre-paid card services firm to prevent cases of fraudulent\
		user account activity. Reduced potential fraud related costs by $300K+ \
		through analysis of user data and cross departmental collaboration with\
		members of the Risk Management, Tech, and Customer Service departments as\
		well as the COO. Revamped existing documentation processing methods,\
		reducing turnaround from ~7 days to 4 hours. Decreased required manpower\
		from 20 FTEs to 1 FTE. Reduced average contingent liable costs associated\
		with implementing charge backs and arbitration through Visa arbitration\
		proceedings by $10K monthly. Reviewed new business contracts for\
		compliance with applicable state and federal laws. Coordinated with tech\
		and customer service departments daily to improve company's internal risk\
		software tools. Developed innovative methods to reduce losses due to fraud."
	}
	]
};

for(var job in work.jobs) {
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDatesWorked);
	$(".work-entry:last").append(formattedDescription);
}

var education = {

	"schools": [
		{
			"name": "Udacity",
			"location": "San Francisco, CA",
			"degree": "Nano-Degree",
			"majors": ["Web Development"],
			"graduation_year": "2016",
			"URL": "www.udacity.com"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco, CA",
			"degree": "MBA",
			"majors": ["Business Administration", "Decision Sciences", "Finance"],
			"graduation_year": "2012",
			"URL": "www.sfsu.edu"
		},
		{
			"name": "University of California, Irvine",
			"location": "Irvine, CA",
			"degree": "BA",
			"majors": ["International Relations"],
			"graduation_year": "2005",
			"URL": "www.uci.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": 2015,
			"URL": "https://www.udacity.com/course/\
			intro-to-programming-nanodegree--nd000"
		},
		{
			"title": "Front-End Programming",
			"school": "Udacity:",
			"dates": 2016,
			"URL": "https://www.udacity.com/course/\
			front-end-web-developer-nanodegree--nd001"
		}
	]
};

education.display = function(){
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].graduation_year);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);


		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedLocation);

		if(education.schools[school].majors.length > 0){
			for(var major in education.schools[school].majors){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

$(".education-entry:last").append(HTMLonlineClasses);
	for(var course in education.onlineCourses){

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);

		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

education.display();

var projects = {
	"projects": [
		{
		"title": "Responsive Design",
		"dates": "2016",
		"description": "Project Website utilizing responsive design principles\
		and highlighting project completed.",
		"images": [
			"http://placekitten.com/200/300",
			"http://placekitten.com/200/300"
			]
		}
	]
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$('#header').append(internationalizeButton);

projects.display = function(){
	for(var project in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(var image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);