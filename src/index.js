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
		{
			name: "Web Design",
			color: "rgb(38, 74, 106)",
		},
		{
			name: "Product Design",
			color: "green",
		},
		{
			name: "Portfolio Development",
			color: "rgb(137, 89, 0)",
		},
		{
			name: "Mobile App Development",
			color: "rgb(38, 74, 106)",
		},
		{
			name: "Web Re-Design",
			color: "green",
		},
		{
			name: "Adobe Tools",
			color: "rgb(137, 89, 0)",
		},
		{
			name: "Figma",
			color: "rgb(38, 74, 106)",
		},
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
			{props.techs.map((tech) => {
				let bgColor = { backgroundColor: tech.color };
				return (
					<p className="tech" style={bgColor}>
						{tech.name}
					</p>
				);
			})}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
