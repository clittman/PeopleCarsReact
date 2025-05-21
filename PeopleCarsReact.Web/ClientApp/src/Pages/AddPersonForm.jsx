import React from "react";
import axios from "axios";
import withRouter from "../withRouter";

class AddPersonForm extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onChange = (e) => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onClick = async () => {
        console.log('posting')
        await axios.post('/api/home/addperson', this.state.person);
        this.setState({person: {
            firstName: '',
            lastName: '',
            age: ''
        }})
        this.props.navigate('/');
    }

    render() {
        return <div className="container" style={{ marginTop: '60px' }}>
            <div style={{ minHeight: '1000px', paddingTop: '200px' }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 card bg-light p-4">
                        <h2>Add a New Person</h2>
                        <input type="text" className="form-control" onChange={this.onChange} name="firstName" placeholder="First Name" value={this.state.person.firstName} />
                        <br />
                        <input type="text" className="form-control" onChange={this.onChange} name="lastName" placeholder="Last Name" value={this.state.person.lastName} />
                        <br />
                        <input type="text" className="form-control" onChange={this.onChange} name="age" placeholder="Age" value={this.state.person.age} />
                        <br />
                        <button className="btn btn-primary btn-lg btn-block" onClick={this.onClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(AddPersonForm);