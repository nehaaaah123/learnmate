import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../logoneww-modified.png"; // Import your logo image

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav>
                <div className="container">
                    {/* Logo */}
                    <div className="logo">
                        <NavLink to="/">
                            <img src={logo} alt="Logo" />
                        </NavLink>
                    </div>

                    {/* Menu Toggle Button */}
                    <button className="menu-toggle" onClick={toggleMenu}>
                        &#9776; {/* Hamburger icon */}
                    </button>

                    {/* Desktop Menu */}
                    <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>
                                    Testimonials
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
