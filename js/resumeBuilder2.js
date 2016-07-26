//var awesomeThoughts = "I am Jimmy and I am AWESOME!";

//var funThoughts = awesomeThoughts.replace("AWESOME", "fun");

//console.log(funThoughts);

//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Jimmy Nguyen");

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": 'Jimmy Nguyen',
	"role": 'Leader',
	"email": 'jimmyn949@gmail.com',
	"linkedin": 'https://www.linkedin.com/in/jimmy-nguyen-7692a55',
	"welcome_message": 'Welcome to my Webspace, where viewers can learn \
	a bit more about me as I will be posting as I will be posting my projects,\
	accomplishments, and work history here.',
	"skills": 'Project Management professional, with several years of experience \
	implementing SaaS products. Product Management professional, with several \
	years of experience delivering exciting new SaaS products.'
}

$("#main").append(bio.name);

var work = {};
work.position = "Associate Project/Product Manager";

var education = {

		"school": [
		{
			"name": "Udacity",
			"city": "San Francisco",
			"major": "Front-End Programming",
			"graduation_year": "TBD"
		},
		{
			"name": "San Francisco State University",
			"city": "San Francisco",
			"major": "Business Administration",
			"graduation_year": "2012"
		},
		{
			"name": "University of California, Irvine",
			"city": "Irvine",
			"major": "International Relations",
			"graduation_year": "2005"
		}
	]
};

education["name"] = "San Francisco State University";
education["years_attended"] = '2010-2012';
education["school_city"] = 'San Francisco';

$("#main").append(work["position"]);
$("#main").append(education.name);