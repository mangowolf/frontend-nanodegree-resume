var formattedName = HTMLheaderName.replace("%data%", "Jimmy Nguyen");

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": 'Jimmy Nguyen',
	"role": 'Leader',
	"linkedin": 'https://www.linkedin.com/in/jimmy-nguyen-7692a55',
	"welcomeMessage": 'Welcome to my Webspace, where viewers can learn \
	a bit more about me as I will be posting as I will be posting my projects,\
	accomplishments, and work history here.',
	"contacts": {
		"mobileNumber": "(949) 302-1441",
		"email": "jimmyn949@gmail.com",
		"gitHubName": "MangoWolf",
		"location": "372A Funston Avenue, San Francisco, CA 94118"
	},
	"skills": ["Advanced Excel", "Powerpoint", "Visio", "MS Project", "SQL",
	"Balsalmiq", "Salesforce", "Python", "Javascript", "PHP", "HTML", "CSS",
	"XML"]
}

$("#main").append(bio.name);

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

var education = {

	"school": [
		{
			"name": "Udacity",
			"city": "San Francisco",
			"degree": "Nano-Degree",
			"majors": ["Front-End Programming"],
			"graduation_year": "TBD",
			"URL": "www.udacity.com"
		},
		{
			"name": "San Francisco State University",
			"city": "San Francisco",
			"degree": "MBA",
			"majors": ["Business Administration"],
			"graduation_year": "2012",
			"URL": "www.sfsu.edu"
		},
		{
			"name": "University of California, Irvine",
			"city": "Irvine",
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

var projects = {
	"projects": [
		"title": "Responsive Design",
		"dates": "2016",
		"description": "Project Website utilizing responsive design principles\
		and highlighting project completed."
		"images": [
			"https://raw.githubusercontent.com/mangowolf/MyPortfolio/master/\
			Ninja%20Blade-250x175-crop.jpg",
			"https://raw.githubusercontent.com/mangowolf/MyPortfolio/master/\
			Shuriken1-250x175-crop.jpg"
		]
	]
}

if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}