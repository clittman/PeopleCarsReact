import React from "react";
import axios from "axios";
import withRouter from "../withRouter";

class AddCarForm extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: ''
        },
        person: {
            id: '',
            firstName: '',
            lastName: ''
        }
    }

    componentDidMount = async () => {
        const {data} = await axios.post('/api/home/getperson', { id: this.props.params.id });
        this.setState({person: data});
    }

    onChange = (e) => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }

    onClick = async () => {
        await axios.post('/api/home/addcar', {...this.state.car, personId: this.state.person.id});
        this.setState({car: {
            make: '',
            model: '',
            year: ''
        }})
        this.props.navigate('/');
    }

    render() {
        const {firstName, lastName} = this.state.person;
        return <div className="row">
            <div className="col-md-6 offset-md-3 card bg-light p-4">
                <h2>Add a car for {firstName} {lastName}</h2>
                <input type="text" className="form-control" onChange={this.onChange} name="make" placeholder="Make" value={this.state.car.make} />
                <br />
                <input type="text" className="form-control" onChange={this.onChange} name="model" placeholder="Model" value={this.state.car.model} />
                <br />
                <input type="text" className="form-control" onChange={this.onChange} name="year" placeholder="Year" value={this.state.car.year} />
                <br />
                <button className="btn btn-primary btn-lg btn-block" onClick={this.onClick} >Submit</button>
            </div>
        </div>
    }
}

export default withRouter(AddCarForm);