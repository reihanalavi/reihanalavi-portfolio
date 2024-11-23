import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "privacy-policy");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Privacy Policy | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="privacy-policy" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Your data is safe.
						</div>

						<div className="subtitle contact-subtitle">
                        I am committed to protecting your privacy. This Privacy Policy explains how I collect, use, disclose, and safeguard your personal information when you visit or interact with my website.

<br /><br />
                        I may collect various types of information, including:

<li>
Personally identifiable information you provide voluntarily: Your name, email address, phone number, and other information you provide when you register, subscribe to newsletters, or contact me.
</li>
<li>
Automatically collected information: Your device data, IP address, browser type, operating system, and your activity on my website.
</li>
<br /><br />
I will not sell, rent, or share your personal information with third parties, except:

With your consent: I will ask for your permission before sharing your personal information with third parties for marketing purposes.
To comply with legal requirements: I may disclose your information if required by law or to protect my rights.
In connection with a business transaction: If my business is acquired or merged with another business, your information may be transferred to the new entity.
						</div>
					</div>

				
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default PrivacyPolicy;
