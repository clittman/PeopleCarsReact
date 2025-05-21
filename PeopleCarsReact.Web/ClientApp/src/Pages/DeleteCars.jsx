import React from "react";
import axios from "axios";
import withRouter from "../withRouter";
import CarRow from "../components/CarRow";
import {Link} from 'react-router-dom';

class DeleteCars extends React.Component {

    state = {
        cars: []
    }

    componentDidMount = async () => {
        const { data } = await axios.post('/api/home/getcarsbyid', { id: this.props.params.id });
        this.setState({ cars: data });
    }

    onDeleteClick = async () => {
        await axios.post('/api/home/deletecarsbyid', { id: this.props.params.id });
        this.setState({ cars: [] });
        this.props.navigate('/');
    }

    render() {
        return <div className="row mt-5">
            <div className="col-md-12">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(c => {
                            return <CarRow
                                key={c.id}
                                car={c}
                            />
                        })}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all of these cars?</h3>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}><button className="btn btn-primary btn-lg w-100">No</button></Link>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                        <button className="btn btn-danger btn-lg w-100" onClick={this.onDeleteClick}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(DeleteCars);
