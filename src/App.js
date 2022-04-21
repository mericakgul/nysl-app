import * as React from "react";
import {Routes, Route, Outlet, Link, NavLink} from "react-router-dom";
import Home from "./components/Home";
import Schedule from "./components/Schedule";

export default function App() {
    return (
        <div>

            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="schedule/:id" element={<Schedule />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
                <ul className="navbar-nav bg-white">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link shadow">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/schedule/meric" className="nav-link shadow">Schedule</NavLink>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <p>Before children</p>
            <Outlet />
            <p>After children</p>

        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
