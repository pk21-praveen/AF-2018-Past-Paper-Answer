import React, {Component} from 'react';

export default class ViewCourseSubject extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subjectsList: ''
        };

        this.onClickFindTotalAmount = this.onClickFindTotalAmount.bind(this);
    }

    componentDidMount() {
        fetch('/api/courses/' + this.props.match.params.id, {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({
                    subjectsList: jsonRes.data
                });
            }).catch(err => console.log(err));
    }

    onClickFindTotalAmount(id) {
        fetch('http://localhost:8080/courses/get-amount/' + id, {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                alert(jsonRes.data);
            }).catch(err => console.log(err));
    };

    render() {
        return (
            <div><br/>
                <h4>Subject Details</h4><br/>
                <table className="table table-bordered ">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Total Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.subjectsList.map((subject, i) => {
                        return (
                            <tr key={i}>
                                <td>{subject.name}</td>
                                <td>{subject.description}</td>
                                <td>{subject.amount}</td>
                                <td>
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