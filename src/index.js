import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const data = {
	myName: "Dr. Liul Sisay",
	myJob1: "Designer",
	myJob2: "Front-End Developer",
	profileImg: "assets/me.png",
	aboutMe:
		"As a front-end developer, I find joy in the process of turning design concepts into interactive and responsive digital experiences, ensuring that the end product not only looks great but also functions seamlessly.",
	myTechs: [
		"Web Design",
		"Product Design",
		"Portfolio Development",
		"Mobile App Development",
		"Web Re-Design",
		"Adobe Illustrator",
		"Adobe Photoshop",
	],
};

function App() {
	return (
		<div className="pp-box">
			<div className="project-name">
				<h3>Profile Card</h3>
				<p>Built with React.js</p>
			</div>
			<div className="profile">
				<Identity imgUrl={data.profileImg} />
				<About about={data.aboutMe} />
				<Techs techs={data.myTechs} />
			</div>
		</div>
	);
}

function Identity(props) {
	return (
		<div className="identity">
			<img src="assets/me.png" alt="Liula"></img>
			<div>
				<Name myName={data.myName} />
				<Job myJob1={data.myJob1} myJob2={data.myJob2} />
			</div>
		</div>
	);
}

function Name(props) {
	const name = props.myName;
	return (
		<div>
			<h2>{name}</h2>
		</div>
	);
}

function Job(props) {
	return (
		<div className="jobs">
			<h3>{props.myJob1}</h3>
			<p>and</p>
			<h3>{props.myJob2}</h3>
		</div>
	);
}

function About(props) {
	return (
		<div className="about">
			<p>{props.about}</p>
		</div>
	);
}

function Techs(props) {
	return (
		<div className="techs">
			<p className={`techs-${0}`}>{props.techs[0]}</p>
			<p className={`techs-${1}`}>{props.techs[1]}</p>
			<p className={`techs-${0}`}>{props.techs[2]}</p>
			<p className={`techs-${2}`}>{props.techs[3]}</p>
			<p className={`techs-${0}`}>{props.techs[4]}</p>
			<p className={`techs-${1}`}>{props.techs[5]}</p>
			<p className={`techs-${2}`}>{props.techs[6]}</p>
		</div>
	);
}

function addTech(techLIst) {
	const techDiv = document.querySelector(".techs");
	for (var i = 0; i < techLIst.length; i++) {
		techDiv.appendChild = <p className={`thech-${i}`}>{techLIst[i]}</p>;
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
