/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { BsGraphUp } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdOutlineRequestQuote } from "react-icons/md";
import { AiTwotoneContainer } from "react-icons/ai";
import { useEffect } from "react";

function Home() {
	let [lazerUser, setLazerUser] = useState(
		JSON.parse(localStorage.getItem("LazerUser"))
	);
	const [moduleIds, setModuleIds] = useState([]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("LazerUser"));
		console.log(storedData.moduleIds);
		if (storedData && storedData.moduleIds) {
			setModuleIds(storedData.moduleIds);
		}
	}, []);

	const Admin = process.env.REACT_APP_CUSTOMERINFO_URL;
	const MaterialManagement = process.env.REACT_APP_CUSTOMERINFO_URL;
	const Production = process.env.REACT_APP_CUSTOMERINFO_URL;
	const Machine = process.env.REACT_APP_CUSTOMERINFO_URL;
	const UnitAccounts = process.env.REACT_APP_CUSTOMERINFO_URL;
	const Analytics = process.env.REACT_APP_CUSTOMERINFO_URL;
	const HOAccounts = process.env.REACT_APP_CUSTOMERINFO_URL;

	return (
		<>
			<Header user={false} />

			<div className="card-container">
				{moduleIds.includes(13) ? (
					<Link
						to="/salesHome"
						style={{ textDecoration: "none", color: "black" }}>
						<div className="dashboard-card">
							<div className="card-item">
								<RiUserSettingsFill
									size={60}
									color="#283E81"
								/>
								<span className="dashboard-link"> Sales</span>
							</div>
						</div>
					</Link>
				) : null}
				{moduleIds.includes(1) ? (
					<a
						href={Admin}
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
									Admin
								</span>
							</div>
						</div>
					</a>
				) : null}
				{moduleIds.includes(7) ? (
					<a
						href={MaterialManagement}
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
									Material Management
								</span>
							</div>
						</div>
					</a>
				) : null}
				{moduleIds.includes(8) ? (
					<a
						href={Production}
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
									Production
								</span>
							</div>
						</div>
					</a>
				) : null}
				{moduleIds.includes(9) ? (
					<a
						href={Machine}
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
									Machine
								</span>
							</div>
						</div>
					</a>
				) : null}

				{moduleIds.includes(10) ? (
					<a
						href={UnitAccounts}
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
									Unit Accounts
								</span>
							</div>
						</div>
					</a>
				) : null}

				{moduleIds.includes(10) ? (
					<a
						// href={Analysis}
						href="http://172.16.20.61:9000/Analysis"
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
									Analytics
								</span>
							</div>
						</div>
					</a>
				) : null}
				{moduleIds.includes(10) ? (
					<a
						// href={HOAccounts}

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
									HO Accounts
								</span>
							</div>
						</div>
					</a>
				) : null}
			</div>
		</>
	);
}

export default Home;
