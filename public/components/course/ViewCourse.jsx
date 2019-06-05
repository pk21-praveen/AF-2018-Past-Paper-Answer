import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class ViewCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coursesList: [],
            subjects: []
        };

    }

    componentDidMount() {
        fetch('/api/courses', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({
                    coursesList: jsonRes.data
                });
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h4>Courses List</h4><br/>
                <table className="table table-bordered ">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Pass Mark</th>
                        <th>Lecture in Charge</th>
                        <th>View Subjects</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.coursesList.map((course, i) => {
                        return (
                            <tr key={i}>
                                <td>{course.name}</td>
                                <td>{course.code}</td>
                                <td>{course.passMark}</td>
                                <td>{course.lectureInCharge}</td>
                                <td>
                                    <Link to={'/course-subjects/' + course._id} className="btn btn-info">View</Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}