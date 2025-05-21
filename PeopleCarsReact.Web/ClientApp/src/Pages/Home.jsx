import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PersonRow from '../components/PersonRow';

class Home extends React.Component {

    state = {
        people: [],
        currentSearch: ''
    }

    componentDidMount = () => {
        this.loadPeople();
    }

    loadPeople = async () => {
        const { data } = await axios.get('/api/home/getpeople');
        this.setState({ people: data });
    }

    onChange = async (e) => {
        const text = e.target.value;
        if (text !== '') {
            const copy = [...this.state.people].filter(p => p.firstName.toLowerCase().includes(text.toLowerCase()) || p.lastName.toLowerCase().includes(text.toLowerCase()))
            this.setState({ currentSearch: text, people: copy })
        }
        else{
            this.setState({currentSearch: ''})
            await this.loadPeople();
        }
    }

    render() {
        return <div style={{ paddingTop: 50 }}>
            <div className='row'>
                <div className="col-md-10">
                    <input type="text" className="form-control form-control-lg" onChange={this.onChange} placeholder="Search People" value={this.state.currentSearch} />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-dark btn-lg w-100">Clear</button>
                </div>
            </div>
            <div style={{ paddingTop: 50 }}>
                <a href="/addperson">
                    <button className="btn btn-success btn-lg w-100">Add Person</button>
                </a>
            </div>
            <div style={{ paddingTop: 50 }}>
                <table className='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(p => {
                            return <PersonRow
                                key={p.id}
                                person={p}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default Home;