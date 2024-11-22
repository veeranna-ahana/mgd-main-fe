/** @format */

// import React from "react";
// import Header from "./Header";
// import { AiFillCreditCard } from "react-icons/ai";

// function Home() {

//   // Retrieve data from local storage
//   const storedData = JSON.parse(localStorage.getItem("LazerUser"));
//   console.log("Role",storedData.data[0].Role)
//   // Extract role from stored data
//   const role = storedData && storedData.length > 0 ? storedData.data[0].Role : storedData.data[0].Role;
//   console.log("role",role)

//   // Function to render cards based on role
//   const renderCards = () => {
//     if (role === "Administrator") {
//       return (
//         <>
//           <CardLink url="http://172.16.20.55:3001" title="Customer Information" />
//           <CardLink url="http://172.16.20.55:3004" title="Material Management" />
//           <CardLink url="http://172.16.20.55:3006" title="Packing And Invoicing" />
//           <CardLink url="http://172.16.20.55:3008" title="Unit Accounts" />
//           <CardLink url="http://172.16.20.55:3009" title="Orders Accounts" />
//         </>
//       );
//     } else if (role === "admin1") {
//       return (
//         <>
//           <CardLink url="http://172.16.20.55:3003" title="Production" />
//           <CardLink url="http://172.16.20.55:3007" title="Machine" />
//         </>
//       );
//     } else {
//       return null; // Render nothing if role doesn't match expected roles
//     }
//   };

//    // Component for rendering each card link
//    const CardLink = ({ url, title }) => (
//     <a href={url} style={{ textDecoration: "none", color: "black" }}>
//       <div className="dashboard-card">
//         <div className="card-item">
//           <AiFillCreditCard size={60} color="#283E81" />
//           <span className="dashboard-link" style={{ textAlign: "center" }}>{title}</span>
//         </div>
//       </div>
//     </a>
//   );

//   return (
//     // <>
//     //   <Header user={false} />
//     //   <div className="card-container">

//     //     {/* Production Module Main Initial Card */}
//     //     {/* <a href="http://172.16.20.55:3003/Production" style={{ textDecoration: "none", color: "black" }}> */}
//     //     <a href="http://172.16.20.55:3003" style={{ textDecoration: "none", color: "black" }}>
//     //       <div className="dashboard-card">
//     //         <div className="card-item">
//     //           <AiFillCreditCard size={60} color="#283E81" />
//     //           <span className="dashboard-link" style={{textAlign:"center"}}>Production</span>

//     //         </div>
//     //       </div>
//     //     </a>

//     //     {/* Material Management Module Main Initial Card */}
//     //     {/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
//     //     <a href="http://172.16.20.55:3004" style={{ textDecoration: "none", color: "black" }}>
//     //       <div className="dashboard-card">
//     //         <div className="card-item">
//     //           <AiFillCreditCard size={60} color="#283E81" />
//     //           <span className="dashboard-link" style={{textAlign:"center"}}>Material Management</span>
//     //         </div>
//     //       </div>
//     //     </a>

//     //      {/* Customer Info Module Main Initial Card */}
//     //     {/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
//     //     <a href="http://172.16.20.55:3001" style={{ textDecoration: "none", color: "black" }}>
//     //       <div className="dashboard-card">
//     //         <div className="card-item">
//     //           <AiFillCreditCard size={60} color="#283E81" />
//     //           <span className="dashboard-link" style={{textAlign:"center"}}>Customer Information</span>
//     //         </div>
//     //       </div>
//     //     </a>

//     //      {/* Packing And Invoicing Module Main Initial Card */}
//     //     {/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
//     //     <a href="http://172.16.20.55:3006" style={{ textDecoration: "none", color: "black" }}>
//     //       <div className="dashboard-card">
//     //         <div className="card-item">
//     //           <AiFillCreditCard size={60} color="#283E81" />
//     //           <span className="dashboard-link" style={{textAlign:"center"}}>Packing And Invoicing</span>
//     //         </div>
//     //       </div>
//     //     </a>

//     //      {/* Machine Module Main Initial Card */}
//     //     {/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
//     //     <a href="http://172.16.20.55:3007" style={{ textDecoration: "none", color: "black" }}>
//     //       <div className="dashboard-card">
//     //         <div className="card-item">
//     //           <AiFillCreditCard size={60} color="#283E81" />
//     //           <span className="dashboard-link" style={{textAlign:"center"}}>Machine</span>
//     //         </div>
//     //       </div>
//     //     </a>

//     //      {/* Unit Accounts Main Initial Card */}
//     //     {/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
//     //     <a href="http://172.16.20.55:3008" style={{ textDecoration: "none", color: "black" }}>
//     //       <div className="dashboard-card">
//     //         <div className="card-item">
//     //           <AiFillCreditCard size={60} color="#283E81" />
//     //           <span className="dashboard-link" style={{textAlign:"center"}}>Unit Accounts</span>
//     //         </div>
//     //       </div>
//     //     </a>

//     //   </div>
//     // </>
//     <>
//     <Header user={false} />
//     <div className="card-container">
//       {renderCards()}
//     </div>
//   </>
//   );
// }

// export default Home;

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
		// Fetch `LazerUser` from local storage and set `moduleIds`
		const storedData = JSON.parse(localStorage.getItem("LazerUser"));
		console.log(storedData.moduleIds);
		if (storedData && storedData.moduleIds) {
			setModuleIds(storedData.moduleIds);
		}
	}, []);
	return (
		<>
			<Header user={false} />
			{/* <div className="card-container">
        <Link
          to="/salesHome"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="dashboard-card">
            <div className="card-item">
              <RiUserSettingsFill size={60} color="#283E81" />
              <span className="dashboard-link"> Sales</span>
            </div>
          </div>
        </Link>
        <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
          <div className="dashboard-card">
            <div className="card-item">
              <RiUserSettingsFill size={60} color="#283E81" />
              <span className="dashboard-link"> Admin</span>
            </div>
          </div>
        </Link>
      </div> */}

			<div className="card-container">
				{/* <div className="row"> */}
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
				{/* {moduleIds.includes(13) ? (
					<Link
						to="/salesHome"
						style={{ textDecoration: "none", color: "black" }}>
						<div className="dashboard-card neumorphic">
							<div className="card-item">
								<RiUserSettingsFill
									size={60}
									color="#283E81"
								/>
								<span className="dashboard-link"> Sales</span>
							</div>
						</div>
					</Link>
				) : null} */}

				{/* {lazerUser.data.access.includes("/admin") ? ( */}
				{/* {moduleIds.includes(1) ? (
					<Link
						href="http://192.168.1.25:3009"
						style={{ textDecoration: "none", color: "black" }}>
						<div className="dashboard-card">
							<div className="card-item">
								<RiUserSettingsFill
									size={60}
									color="#283E81"
								/>
								<span className="dashboard-link"> Admin</span>
							</div>
						</div>
					</Link>
				) : null} */}
				{moduleIds.includes(1) ? (
					<a
						// href="http://172.16.20.61:3009"
						href="http://172.16.20.61:8083"
						// href="http://192.168.1.25:3009"
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

				{/* Material Management Module Main Initial Card */}
				{/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
				{moduleIds.includes(7) ? (
					<a
						// href="http://172.16.20.61:8081"
						href="http://172.16.20.61:4018"
						// href="http://192.168.1.25:9004"
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
						href="http://172.16.20.61:4021"
						// href="http://172.16.20.61:8087"
						// href="http://192.168.1.25:9002"
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
						href="http://172.16.20.61:4020"
						// href="http://172.16.20.61:8086"
						// href="http://192.168.1.25:9003"
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

				{/* Unit Accounts Main Initial Card */}
				{/* <a href="http://172.16.20.55:3004/home" style={{ textDecoration: "none", color: "black" }}> */}
				{moduleIds.includes(10) ? (
					<a
						href="http://172.16.20.61:4017"
						// href="http://172.16.20.61:8089"
						// href="http://192.168.1.25:4017"
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
				{/* </div> */}
				{/* <div className="row"> */}

				{moduleIds.includes(10) ? (
					<a
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
						// href="http://172.16.20.61:9000/Analysis"
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
				{/* </div> */}
			</div>
		</>
	);
}

export default Home;
