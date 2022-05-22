import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'CHAEEUN JANG',
	title: "Chaeeun's Portfolio",
	subTitle: emoji("프론트엔드 개발자로 성장중인 주니어 개발자입니다.💪🏻"),
	role: "📢",
	resumeLink: "/subPage",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'Your github link',
	linkedin: 'Your linkedin link',
	email: 'your email link',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("Skills 💻"),
	subTitle: "사용가능한 기술스택",
	/*describeSkills: [
		emoji("✔ 언어"),
		emoji("✔ Front-End"),
		emoji("✔ Back-End"),
		emoji("✔ RDBMS"),
		emoji("✔ Server"),
	],*/
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	/* lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: "이해하고\n응용이 가능"},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: "70"},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: "70"},
		{fontAwesome: "fab fa-sass", text: "jQuery", proficiency: "30"},
		{fontAwesome: "fab fa-react", text: "React", proficiency: "60"},
		{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},
		{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},
	],
	 */
	skillStack:[
		{subTitle:emoji("✔ Main Skills"), 
		lists:[{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: "이해하고\n응용이 가능"},
					{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: "70"},
					{fontAwesome: "fab fa-sass", text: "jQuery", proficiency: "30"},
					{fontAwesome: "fab fa-react", text: "React", proficiency: "60"},
					{fontAwesome: "fab fa-js", text: "JS", proficiency: "70"},
					{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},]
		},
		{subTitle:emoji("✔ Front-End"), 
		lists:[{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: "2번"},
					{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: "70"},
					{fontAwesome: "fab fa-sass", text: "jQuery", proficiency: "30"},
					{fontAwesome: "fab fa-react", text: "React", proficiency: "60"},
					{fontAwesome: "fab fa-js", text: "JS", proficiency: "70"},
					{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},]
		},
		{subTitle:emoji("✔ Back-End"), 
		lists:[{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: "3번"},
					{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: "70"},
					{fontAwesome: "fab fa-sass", text: "jQuery", proficiency: "30"},
					{fontAwesome: "fab fa-react", text: "React", proficiency: "60"},
					{fontAwesome: "fab fa-js", text: "JS", proficiency: "70"},
					{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},]
		},
		{subTitle:emoji("✔ ETC"), 
		lists:[{fontAwesome: "fab fa-html5", text: "Oracle", proficiency: "4번"},
					{fontAwesome: "fab fa-css3-alt", text: "PostgreSQL", proficiency: "70"},
					{fontAwesome: "fab fa-sass", text: "Linux", proficiency: "30"},
					{fontAwesome: "fab fa-react", text: "MySQL", proficiency: "60"},
					{fontAwesome: "fab fa-js", text: "JS", proficiency: "70"},
					{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},]
		},
	],
	view: true
};

export const experience = {
	title: "Experience",
	lists: [
		{
			date: "2019.12 ~ 2020.06",
			company: "비트캠프",
			role: "풀스택 웹 개발자 양성과정",
		},
		{
			date: "2020.10 ~",
			company: "웹케시 그룹",
			role: "비플제로페이 웹&서버 개발부",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "Project1",
			desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me",
	subTitle: "subtitle for contact",
	introduce: emoji("📞"),
	view: true
}