import React from 'react';
import './Hello.css';
import { greeting } from '../../portfolio';
import Social from '../Social/Social';
// import { useNavigate } from 'react-router-dom';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
/* 	let navigate = useNavigate();
	function resumeClick(){
		navigate("/subPage");
	}
 */	return (
		<Fade bottom duration={800}>
		<section className="section--hello">
			<div className="inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
						<span className="hello-emoji">👋</span>
					</div>
					<div className="role">
						<span>{greeting.role}</span>
					</div>
					<div className="text-subtitle">
						<span>{greeting.subTitle}</span>
					</div>
					<div className="social-links">
						<Social />
					</div>
					<div className="wrapper-links">
						<a href="#contact" id="about">Contact &gt;</a>
						<a href="#" id="resume" >View Resume &gt;
						{/*<iframe width="100%" height="600" src={greeting.resumeLink}></iframe>*/}</a>
					</div>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;