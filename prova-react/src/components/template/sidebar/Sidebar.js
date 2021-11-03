import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom"

function Sidebar() {

    return (
        <div className="sidebar-menu-collapsed">
            <div className="sidebar-menu sticky-sidebar-menu">

                <div className="logo">
                    <h1><a href="index.html">Collective</a></h1>
                </div>

                <div className="logo-icon text-center">
                    <a href="./home" title="logo"><img src="assets/images/logo.png" alt="logo-icon"/>
                </a>

                    <div className="sidebar-menu-inner">
                        <ul className="nav nav-pills nav-stacked custom-nav">
                            <li><a href="./home"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
                            </li>
                            <li><a href="./cards"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
                            <li>
                                <Link to="/pricing"><i className="fa fa-table"></i> <span>Pricing tables</span></Link>
                            </li>
                            <li><a href="./blocks"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                            <li><a href="./forms"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
                        </ul>

                        <a className="toggle-btn">
                            <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                            <i className="fa fa-angle-double-right menu-collapsed__right"></i>
                        </a>

                    </div>
                </div>

            </div>
        </div>

    );

}

export default Sidebar;