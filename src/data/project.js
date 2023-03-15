const skillSrc = "./images/skills";
const data = [
	{
		name: "Authly",
		details: "User Authentication Application",
		bgImage: "./images/projects/authly/authly-bg.jpeg",
		logoImage: "./images/projects/authly/authly-logo.png",
		github: "https://github.com/Foster0123/Authly",
		live: "#",
		status: "Completed",
		tech: [
			`${skillSrc}/pug.png`,
			`${skillSrc}/sass.png`,
			`${skillSrc}/node.png`,
			`${skillSrc}/express.png`,
			`${skillSrc}/postgresql.png`,
			`${skillSrc}/javascript.png`,
		],
		skills: [
			'Pug', 'Sass', "NodeJS", 
			'ExpressJS', 'PostgreSQL', 
			'JavaScript'
		],
		features: [
			"Create account",
			"Update account details",
			"Delete account",
			"Logout of account",
			"Upload profile picture",
			"Reset Forgotten Password",
		],
	},
	{
		name: "Blaze",
		details: "Todo Application",
		bgImage: "./images/projects/blaze/blaze-bg.jpeg",
		logoImage: "./images/projects/blaze/blaze-logo.png",
		github: "https://github.com/Foster0123/Blaze",
		live: "#",
		status: "Ongoing",
		tech: [
			`${skillSrc}/react.png`,
			`${skillSrc}/redux.png`,
			`${skillSrc}/node.png`,
			`${skillSrc}/express.png`,
			`${skillSrc}/redis.png`,
			`${skillSrc}/mysql.png`,
			`${skillSrc}/typescript.png`,
		],
		skills: [
			'React','Redux', "NodeJS", 
			'ExpressJS', 'Redis', 'MySQL', 
			'TypeScript'
		],
		features: [
			"Create account",
			"Update account details",
			"Delete account",
			"Logout of account",
			"Upload profile picture",
			"Reset Forgotten Password",
		],
	},
	{
		name: "Fluid",
		details: "Chat Application",
		bgImage: "./images/projects/fluid/fluid-bg.jpeg",
		logoImage: "./images/projects/fluid/fluid-logo.png",
		github: "https://github.com/Foster0123/Fluid",
		live: "#",
		status: "Ongoing",
		tech: [
			`${skillSrc}/angular.png`,
			`${skillSrc}/actix.png`,
			`${skillSrc}/sass.png`,
			`${skillSrc}/redis.png`,
			`${skillSrc}/postgresql.png`,
			`${skillSrc}/typescript.png`,
		],
		skills: [
			'Angular', 'Actix Web', 'SCSS', 
			'Redis','PostgreSQL', 'TypeScript'
		],
		features: [
			"Create account",
			"Update account details",
			"Delete account",
			"Logout of account",
			"Upload profile picture",
			"Reset Forgotten Password",
		],
	},
];
export { data };