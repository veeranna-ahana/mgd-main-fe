/** @format */

import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { AiFillCreditCard } from "react-icons/ai";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Home() {
	let navigate = useNavigate();

	const storedData = JSON.parse(localStorage.getItem("LazerUser"));

	console.log("storedData", storedData);

	const username = storedData.data[0].UserName;
	const token = storedData.accessToken;
	const userData = storedData.data[0];
	const menus = storedData.data.access;

	// Secret key for encryption/decryption
	const secretKey = process.env.REACT_APP_SECRET_KEY;

	// Encrypt userData
	function encryptUserData(userData) {
		const secretKey = process.env.REACT_APP_SECRET_KEY;

		if (!secretKey) {
			console.error("Secret key is not defined");
			return;
		}

		if (!userData) {
			console.error("No user data to encrypt");
			return;
		}

		try {
			const encrypted = CryptoJS.AES.encrypt(
				JSON.stringify(userData),
				secretKey
			).toString();

			return encrypted; // Base64-encoded string
		} catch (error) {
			console.error("Encryption failed:", error);
		}
	}

	// Example usage
	const encryptedData = encryptUserData(userData);
	console.log("userData", userData);
	console.log("encryptedData", encryptedData);

	// Function to render cards based on role
	const renderCards = () => {
		return (
			<>
				<CardLink
					url="http://172.16.20.61:4000"
					title="Customer Information"
					// dataToStore={{ userData }}
				/>
				<CardLink
					url="http://172.16.20.61:4015"
					title="Orders"
				/>
				<CardLink
					url="http://172.16.20.61:4002"
					title="Material Setup"
				/>
				<CardLink
					url="http://172.16.20.61:8082"
					title="Quotation"
				/>

				<CardLink
					url="http://172.16.20.61:8088"
					title="Packing And Inv"
				/>
			</>
		);
	};

	// Function to construct URL with query parameters
	const constructUrlWithParams = (url, params) => {
		const urlObj = new URL(url);
		Object.keys(params).forEach((key) =>
			urlObj.searchParams.append(key, JSON.stringify(params[key]))
		);
		return urlObj.toString();
	};

	// Component for rendering each card link
	const CardLink = ({ url, title, dataToStore }) => {
		// QUIRE PARAMS METHOD

		// const handleClick = (e) => {
		// 	e.preventDefault();
		// 	const newUrl = constructUrlWithParams(url, { dataToStore });
		// 	const newWindow = window.open(newUrl);
		// 	if (newWindow) {
		// 		//console.log("Opening URL with dataToStore param:", newUrl); // Debugging line
		// 	}
		// };

		//LOCAL-STORAGE METHOD

		// const handleClick = (e) => {
		// 	e.preventDefault();
		// 	localStorage.setItem("userData", JSON.stringify(storedData));
		// 	window.open(url);
		// };

		// API METHOD
		// const handleClick = (e) => {
		// 	e.preventDefault();
		// 	fetch("http://172.16.20.61:4000", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({ dataToStore: storedData }),
		// 	})
		// 		.then((response) => response.json())
		// 		.then((data) => {
		// 			console.log("Success:", data);
		// 		})
		// 		.catch((error) => {
		// 			console.error("Error:", error);
		// 		});
		// };

		// COOICKEIS METHOD
		const handleClick = (e) => {
			e.preventDefault();
			Cookies.set("token", storedData.accessToken);
			Cookies.set("userData", JSON.stringify(storedData.data[0]));

			window.open(url);
		};

		return (
			<>
				<a
					href={url}
					style={{ textDecoration: "none", color: "black" }}
					onClick={handleClick}>
					<div className="dashboard-card">
						<div className="card-item">
							<AiFillCreditCard
								size={60}
								color="#283E81"
							/>
							<span
								className="dashboard-link"
								style={{ textAlign: "center" }}>
								{title}
							</span>
						</div>
					</div>
				</a>
			</>
		);
	};

	return (
		// <>
		// 	<Header user={false} />
		// 	<button
		// 		className="button-style"
		// 		style={{
		// 			backgroundColor: "#283E81",
		// 			borderRadius: "10px",
		// 			marginLeft: "42px",
		// 		}}
		// 		onClick={() => navigate("../home")}>
		// 		Previous Menu
		// 	</button>
		// 	{/* <div className="card-container">{renderCards()}</div> */}
		// 	<a
		// 		href="http://172.16.20.61:4000"
		// 		style={{ textDecoration: "none", color: "black" }}>
		// 		<div className="dashboard-card">
		// 			<div className="card-item">
		// 				<RiUserSettingsFill
		// 					size={60}
		// 					color="#283E81"
		// 				/>
		// 				<span
		// 					className="dashboard-link"
		// 					style={{ textAlign: "center" }}>
		// 					CustomerInfo
		// 				</span>
		// 			</div>
		// 		</div>
		// 	</a>
		// </>
		<>
			<Header user={false} />
			<button
				className="button-style"
				style={{
					backgroundColor: "#283E81",
					borderRadius: "10px",
					marginLeft: "42px",
				}}
				onClick={() => navigate("../home")}>
				Previous Menu
			</button>
			<div className="card-container">
				{/* {lazerUser.data.access.includes("/customer/custorders") ? ( */}
				{/* {lazerUser.data.access.includes("/sales") ? ( */}
				{/* <Link
					to="/salesHome"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span className="dashboard-link"> CustomerInfo</span>
						</div>
					</div>
				</Link> */}
				{/* ) : null} */}

				{/* {lazerUser.data.access.includes("/admin") ? ( */}
				{/* <Link
					to="/admin"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span className="dashboard-link"> Quotation</span>
						</div>
					</div>
				</Link> */}
				{/* ) : null} */}

				{/* Material Management Module Main Initial Card */}
				{/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
				<a
					// href="http://172.16.20.61:4000"
					href="http://172.16.20.61:8082"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span
								className="dashboard-link"
								style={{ textAlign: "center" }}>
								CustomerInfo
							</span>
						</div>
					</div>
				</a>
				<a
					href="http://172.16.20.61:4000"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span
								className="dashboard-link"
								style={{ textAlign: "center" }}>
								Quotation
							</span>
						</div>
					</div>
				</a>
				<a
					href="http://172.16.20.61:4015"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span
								className="dashboard-link"
								style={{ textAlign: "center" }}>
								Order
							</span>
						</div>
					</div>
				</a>

				{/* Unit Accounts Main Initial Card */}
				{/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
				<a
					href="http://172.16.20.61:4019"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span
								className="dashboard-link"
								style={{ textAlign: "center" }}>
								Packing Invoice
							</span>
						</div>
					</div>
				</a>
				<a
					// href="http://172.16.20.61:4002"
					href="http://172.16.20.61:8090"
					style={{ textDecoration: "none", color: "black" }}>
					<div className="dashboard-card">
						<div className="card-item">
							<RiUserSettingsFill
								size={60}
								color="#283E81"
							/>
							<span
								className="dashboard-link"
								style={{ textAlign: "center" }}>
								Material Setup
							</span>
						</div>
					</div>
				</a>
			</div>
		</>
	);
}

export default Home;
