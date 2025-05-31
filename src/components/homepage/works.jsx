import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work & Experiences"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./royals.png"
								alt="royals_work"
								className="work-image"
							/>
							<div className="work-title">ROYALS Karate Academy</div>
							<div className="work-subtitle">
								Web Developer Intern
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>
						<div className="work">
							<img
								src="./jatiprima_work.png"
								alt="jatiprima_work"
								className="work-image"
							/>
							<div className="work-title">PT. Jati Prima Furniture Jepara</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
						<div className="work">
							<img
								src="./leolit.png"
								alt="leolit"
								className="work-image"
							/>
							<div className="work-title">Leolit Games Studio</div>
							<div className="work-subtitle">
								Game Developer Freelancer
							</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="./alzora.png"
								alt="alzora"
								className="work-image"
							/>
							<div className="work-title">Alzora Sport Event Organizer</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - 2023</div>
						</div>
						<div className="work">
							<img
								src="./smansara.png"
								alt="smansara"
								className="work-image"
							/>
							<div className="work-title">SMAN 1 Jepara</div>
							<div className="work-subtitle">
								Game Development RnD Assistant
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
						<div className="work">
							<img
								src="./aig.png"
								alt="aig"
								className="work-image"
							/>
							<div className="work-title">Arcadesindo Games</div>
							<div className="work-subtitle">
								Game Developer Intern
							</div>
							<div className="work-duration">2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
