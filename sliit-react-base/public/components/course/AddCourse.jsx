import React, {Component} from 'react';

export default class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subjectsList: [],
            name: '',
            code: '',
            passMark: '',
            lectureInCharge: '',
            subjects: []
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }

    componentDidMount() {
        fetch('/api/subjects', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({
                    subjectsList: jsonRes.data
                });

            }).catch(err => console.log(err));
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    onSubmitHandler(e) {
        e.preventDefault();

        const courseData = {
            name: this.state.name,
            code: this.state.code,
            passMark: this.state.passMark,
            lectureInCharge: this.state.lectureInCharge,
            subjects: this.state.subjects
        };

        fetch('/api/courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseData)
        }).then(res => res.json()).then(jsonRes => {
            alert(jsonRes.message);
        }).catch(err => console.log(err));

        this.setState({
            name: '',
            code: '',
            passMark: '',
            lectureInCharge: '',
            subjects: ''
        });
    };

    render() {
        return (
            <div>
                <h4>Add Course</h4><br/>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Name :</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           value={this.state.name}
                           onChange={this.onChangeHandler}
                           required/>
                    <br/>
                    <label>Code :</label>
                    <input type="text"
                           className="form-control"
                           id="code"
                           value={this.state.code}
                           onChange={this.onChangeHandler}
                           required/>
                    <br/>
                    <label>Pass Mark :</label>
                    <input type="number"
                           min="0"
                           max="100"
                           className="form-control"
                           id="passMark"
                           value={this.state.passMark}
                           onChange={this.onChangeHandler}
                           required/>
                    <br/>
                    <label>Lecture in Charge :</label>
                    <input type="text"
                           className="form-control"
                           id="lectureInCharge"
                           value={this.state.lectureInCharge}
                           onChange={this.onChangeHandler}
                           required/>
                    <br/>
                    <label>Subjects :</label>
                    <select className="form-control"
                            id="subjects"
                            onChange={this.onChangeHandler}
                            required>
                        {this.state.subjectsList.map(subject => {
                            return <option value={subject._id} key={subject._id}>{subject.name}</option>
                        })}
                    </select>
                    <div className="text-center">
                        <input type="submit" className="btn btn-primary mt-4" value="Submit"/>
                    </div>
                </form>
                <br/><br/>
            </div>
        );
    }
}