/** @format */

import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { RiUserSettingsFill } from "react-icons/ri";

function Home() {
	let navigate = useNavigate();

	const CustomerInfo = process.env.REACT_APP_CUSTOMERINFO_URL;
	const Quotation = process.env.REACT_APP_QUOTATION_URL;
	const Orders = process.env.REACT_APP_ORDERS_URL;
	const PackingInv = process.env.REACT_APP_PACKINGINV_URL;
	const MaterialSetup = process.env.REACT_APP_MTRLSETUP_URL;

	return (
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
				<a
					href={CustomerInfo}
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
					href={Quotation}
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
					href={Orders}
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

				<a
					href={PackingInv}
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
					href={MaterialSetup}
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
