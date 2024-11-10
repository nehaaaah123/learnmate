import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav>
                <div className="container">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        &#9776; {/* Hamburger icon */}
                    </button>
                    <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Courses
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to="/testimonials"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Testimonials
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={`mobile-menu ${menuOpen ? 'menu-open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
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
