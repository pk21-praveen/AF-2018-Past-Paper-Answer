import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ViewCourseSubject from "./components/course/ViewCourseSubject";
import AddCourse from "./components/course/AddCourse";
import ViewCourse from "./components/course/ViewCourse";

export default class App extends Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <div className="collapse navbar-collapse" id="collapseNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Add-Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/view-course" className="nav-link">View-Course</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <br/>
                    <Route exact path="/" component={AddCourse}/>
                    <Route path="/view-course" component={ViewCourse}/>
                    <Route path="/course-subjects/:id" component={ViewCourseSubject}/>
                </div>
            </Router>
        );
    }
}
