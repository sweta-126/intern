import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="company">Coursify</div>
			<nav ref={navRef}>
				<a href="/#">For Jobseekers</a>
				<a href="/#">For companies</a>
        <a href="/#">Discover</a>
        <a href="/#">Services</a>
        <a href="/#">Contact</a>
        <button className="btn1">Register</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;