var model = {
	bio: {
	"name": 'Jimmy Nguyen',
	"role": 'Web Developer',
	"welcomeMessage": 'Welcome to my Webspace! Below you can learn' +
	'a bit more about me, my projects, accomplishments, and work history.',
	"contacts": {
		"mobile": "(949) 302-1441",
		"email": "jimmyn949@gmail.com",
		"github": "MangoWolf",
		"location": "San Francisco, CA"
	},
	"biopic": "http://placekitten.com/g/200/300",
	"skills": ["Advanced Excel", "Powerpoint", "Visio", "MS Project", "SQL",
	"Balsalmiq", "Salesforce", "Python", "Javascript", "PHP", "HTML", "CSS",
	"XML"]
	},
	work: {
	"jobs": [
	{
		"employer": "TrackerCorp",
		"title": "Associate Project/Product Manager",
		"location": "San Francisco",
		"dates": "2012 - Present",
		"description": 'Enhance the company’s premier new I-9 Resolve product line' +
		'through the Agile SDLC, from ideation to documentation to development to' +
		'QA to market introduction. Draft requirements documentation including use' +
		'cases, scenarios, feature descriptions, UI mockups, and business process' +
		'flowchart diagrams. Successfully co-lead major components of a' +
		'$10M implementation project for a Fortune 100 client while working cross' +
		'functionally with various internal and external stakeholders to reduce' +
		'client’s compliance risk by $100M. Develop a new methodology for the' +
		'conversion and remediation lifecycle that scaled processing from 20K Form' +
		'I-9’s for smaller clients to over 700K+ Form I-9’s for enterprise clients.' +
		'Analyze risk, generate reports, and provide insight to customer/product' +
		'needs. Lead software implementation of several projects concurrently and' +
		'subsequently fulfilled account management duties.'
	},
	{
		"employer": "Camargue Technologies, Inc.",
		"title": "Operations Coordinator/Solutions Analyst",
		"location": "San Francisco",
		"dates": "2011 - 2012",
		"description": 'For start-up technology firm, research and aggregate' +
		'market data using resources such as Lexis-Nexis and Hoovers to assess' +
		'opportunity for online arbitration. Synthesize and report data pertaining' +
		'to arbitration laws, market conditions and competitive landscape.' +
		'Develop business plan that accurately reflects opportunities and' +
		'challenges in online arbitration market. Work with development team' +
		'to draft requirements documentation, including use cases, scenarios,' +
		'feature descriptions and business process flowchart diagrams.' +
		'Quality assurance testing for website development.'
	},
	{
		"employer": "24-7 Commercial Marketing",
		"title": "Risk Analyst",
		"location": "Santa Monica",
		"dates": "2008 - 2010",
		"description": 'Using software search tools including MySQL, tracked,' +
		'analyzed, and reported trends in 20M+ member database of $100M payment' +
		'processing and pre-paid card services firm to prevent cases of fraudulent' +
		'user account activity. Reduced potential fraud related costs by $300K+' +
		'through analysis of user data and cross departmental collaboration with' +
		'members of the Risk Management, Tech, and Customer Service departments as' +
		'well as the COO. Revamped existing documentation processing methods,' +
		'reducing turnaround from ~7 days to 4 hours. Decreased required manpower' +
		'from 20 FTEs to 1 FTE. Reduced average contingent liable costs associated' +
		'with implementing charge backs and arbitration through Visa arbitration' +
		'proceedings by $10K monthly. Reviewed new business contracts for' +
		'compliance with applicable state and federal laws. Coordinated with tech' +
		'and customer service departments daily to improve company\'s internal risk' +
		'software tools. Developed innovative methods to reduce losses due to fraud.'
	}
	]
	},
	education: {

	"schools": [
		{
			"name": "Udacity",
			"location": "San Francisco, CA",
			"degree": "Nano-Degree",
			"majors": ["Web Development"],
			"dates": "2016",
			"url": "www.udacity.com"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco, CA",
			"degree": "MBA",
			"majors": ["Business Administration", "Decision Sciences", "Finance"],
			"dates": "2012",
			"url": "www.sfsu.edu"
		},
		{
			"name": "University of California, Irvine",
			"location": "Irvine, CA",
			"degree": "BA",
			"majors": ["International Relations"],
			"dates": "2005",
			"url": "www.uci.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"date": '2015',
			"url": 'https://www.udacity.com/course/' +
			'intro-to-programming-nanodegree--nd000'
		},
		{
			"title": "Front-End Programming",
			"school": "Udacity:",
			"date": '2016',
			"url": 'https://www.udacity.com/course/' +
			'front-end-web-developer-nanodegree--nd001'
		}
	]
	},
	projects: {
	"projects": [
		{
		"title": "Responsive Design",
		"dates": "2016",
		"description": 'Project Website utilizing responsive design principles' +
		'and highlighting project completed.',
		"images": [
			"http://placekitten.com/200/300",
			"http://placekitten.com/200/300"
			]
		}
	]
	},
};

/*var bio = {
	"name": 'Jimmy Nguyen',
	"role": 'Web Developer',
	"welcomeMessage": 'Welcome to my Webspace! Below you can learn' +
	'a bit more about me, my projects, accomplishments, and work history.',
	"contacts": {
		"mobile": "(949) 302-1441",
		"email": "jimmyn949@gmail.com",
		"github": "MangoWolf",
		"location": "San Francisco, CA"
	},
	"biopic": "http://placekitten.com/g/200/300",
	"skills": ["Advanced Excel", "Powerpoint", "Visio", "MS Project", "SQL",
	"Balsalmiq", "Salesforce", "Python", "Javascript", "PHP", "HTML", "CSS",
	"XML"]
};*/

model.bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
	var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage);
	var formattedBiopic = HTMLbioPic.replace("%data%", model.bio.biopic);
	var formattedMobile = HTMLmobile.replace("%data%",model.bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", model.bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts.location);

	$('#header').prepend(formattedName, formattedRole);
	$('#header').append(formattedWelcomeMsg, formattedBiopic);
	$('#topContacts').append(formattedMobile, formattedEmail,
		formattedGithub, formattedLocation);
	$('#footerContacts').append(formattedMobile, formattedEmail,
		formattedGithub, formattedLocation);

	if(model.bio.skills.length){
		$("#header").append(HTMLskillsStart);
		for(i=0; i < model.bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", model.bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};

model.bio.display();

/*var work = {
	"jobs": [
	{
		"employer": "TrackerCorp",
		"title": "Associate Project/Product Manager",
		"location": "San Francisco",
		"dates": "2012 - Present",
		"description": 'Enhance the company’s premier new I-9 Resolve product line' +
		'through the Agile SDLC, from ideation to documentation to development to' +
		'QA to market introduction. Draft requirements documentation including use' +
		'cases, scenarios, feature descriptions, UI mockups, and business process' +
		'flowchart diagrams. Successfully co-lead major components of a' +
		'$10M implementation project for a Fortune 100 client while working cross' +
		'functionally with various internal and external stakeholders to reduce' +
		'client’s compliance risk by $100M. Develop a new methodology for the' +
		'conversion and remediation lifecycle that scaled processing from 20K Form' +
		'I-9’s for smaller clients to over 700K+ Form I-9’s for enterprise clients.' +
		'Analyze risk, generate reports, and provide insight to customer/product' +
		'needs. Lead software implementation of several projects concurrently and' +
		'subsequently fulfilled account management duties.'
	},
	{
		"employer": "Camargue Technologies, Inc.",
		"title": "Operations Coordinator/Solutions Analyst",
		"location": "San Francisco",
		"dates": "2011 - 2012",
		"description": 'For start-up technology firm, research and aggregate' +
		'market data using resources such as Lexis-Nexis and Hoovers to assess' +
		'opportunity for online arbitration. Synthesize and report data pertaining' +
		'to arbitration laws, market conditions and competitive landscape.' +
		'Develop business plan that accurately reflects opportunities and' +
		'challenges in online arbitration market. Work with development team' +
		'to draft requirements documentation, including use cases, scenarios,' +
		'feature descriptions and business process flowchart diagrams.' +
		'Quality assurance testing for website development.'
	},
	{
		"employer": "24-7 Commercial Marketing",
		"title": "Risk Analyst",
		"location": "Santa Monica",
		"dates": "2008 - 2010",
		"description": 'Using software search tools including MySQL, tracked,' +
		'analyzed, and reported trends in 20M+ member database of $100M payment' +
		'processing and pre-paid card services firm to prevent cases of fraudulent' +
		'user account activity. Reduced potential fraud related costs by $300K+' +
		'through analysis of user data and cross departmental collaboration with' +
		'members of the Risk Management, Tech, and Customer Service departments as' +
		'well as the COO. Revamped existing documentation processing methods,' +
		'reducing turnaround from ~7 days to 4 hours. Decreased required manpower' +
		'from 20 FTEs to 1 FTE. Reduced average contingent liable costs associated' +
		'with implementing charge backs and arbitration through Visa arbitration' +
		'proceedings by $10K monthly. Reviewed new business contracts for' +
		'compliance with applicable state and federal laws. Coordinated with tech' +
		'and customer service departments daily to improve company\'s internal risk' +
		'software tools. Developed innovative methods to reduce losses due to fraud.'
	}
	]
};*/

model.work.display = function(){
	model.work.jobs.forEach(function(job){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDatesWorked = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDatesWorked,
			formattedDescription);
	});
};

model.work.display();

/*var education = {

	"schools": [
		{
			"name": "Udacity",
			"location": "San Francisco, CA",
			"degree": "Nano-Degree",
			"majors": ["Web Development"],
			"dates": "2016",
			"url": "www.udacity.com"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco, CA",
			"degree": "MBA",
			"majors": ["Business Administration", "Decision Sciences", "Finance"],
			"dates": "2012",
			"url": "www.sfsu.edu"
		},
		{
			"name": "University of California, Irvine",
			"location": "Irvine, CA",
			"degree": "BA",
			"majors": ["International Relations"],
			"dates": "2005",
			"url": "www.uci.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"date": '2015',
			"url": 'https://www.udacity.com/course/' +
			'intro-to-programming-nanodegree--nd000'
		},
		{
			"title": "Front-End Programming",
			"school": "Udacity:",
			"date": '2016',
			"url": 'https://www.udacity.com/course/' +
			'front-end-web-developer-nanodegree--nd001'
		}
	]
};*/

model.education.display = function(){
	for(var i=0; i<model.education.schools.length; i++){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", model.education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", model.education.schools[i].degree);
		var formattedDate = HTMLschoolDates.replace("%data%", model.education.schools[i].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", model.education.schools[i].location);

		$(".education-entry:last").append(formattedName + formattedDegree,formattedDate,formattedLocation);

		if(model.education.schools[i].majors.length){
			for(var j=0; j<model.education.schools[i].majors.length; j++){
				var formattedMajor = HTMLschoolMajor.replace("%data%", model.education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	$("#education").append(HTMLonlineClasses);
		for(var k=0; k<model.education.onlineCourses.length; k++){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[k].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[k].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[k].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", model.education.onlineCourses[k].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool,formattedOnlineDates,
				formattedOnlineURL);
		}
};

model.education.display();

/*var projects = {
	"projects": [
		{
		"title": "Responsive Design",
		"dates": "2016",
		"description": 'Project Website utilizing responsive design principles' +
		'and highlighting project completed.',
		"images": [
			"http://placekitten.com/200/300",
			"http://placekitten.com/200/300"
			]
		}
	]
};*/

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$('#header').append(internationalizeButton);

model.projects.display = function(){
	for(var i=0; i<model.projects.projects.length; i++){
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", model.projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", model.projects.projects[i].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

		if(model.projects.projects[i].images.length){
			for(var k=0; k<model.projects.projects[i].images.length; k++){
				var formattedImage = HTMLprojectImage.replace("%data%", model.projects.projects[i].images[k]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

model.projects.display();

$("#mapDiv").append(googleMap);