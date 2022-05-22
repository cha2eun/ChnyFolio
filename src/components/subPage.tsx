import React from 'react';
import Header from './Header/Header';
import Top from './topButton/Top';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { greeting, skills, experience, openSourceProjects, projects, achievements, blogs, contactInfo } from '../portfolio';

function SubPage() {
	return (
		<div className="root">
			<Header />
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default SubPage;