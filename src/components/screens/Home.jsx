import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InfoBanner } from '../InfoBanner';
import { Navbar } from '../Navbar';
import "../style.css";

export const Home = () => {
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascending');
    const [searchQuery, setSearchQuery] = useState('');
    const [tableView, setTableView] = useState(true);

    const getData = () => {
        axios.get('https://coralmango.com/api/react-test')
            .then(function (response) {
                const data = response.data;
                setData(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const sortByProperty = (property) => {
        const sortedData = [...data].sort((a, b) => {
            if (sortOrder === 'ascending') {
                return a[property] > b[property] ? 1 : -1;
            } else {
                return a[property] < b[property] ? 1 : -1;
            }

        });

        setData(sortedData);
        setSortOrder(sortOrder === 'ascending' ? 'descending' : "ascending");
    }

    const sortByName = () => {
        sortByProperty('name');
    }

    const sortByAge = () => {
        sortByProperty('age');
    }

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleToggleButton = () => {
        setTableView(!tableView);
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <Navbar text='Logout' />
            <div className='top-container'>
                <input type='text' value={searchQuery} className='seacrh-box' onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search name' />
                <button className='toggle-button' onClick={handleToggleButton}>
                    {tableView ? 'Card View' : 'Table View'}
                </button>
            </div>
            {tableView ?
                <div>
                    <table className="table table-bordered table-striped rounded">
                        <thead>
                            <tr>
                                <th scope="col" onClick={sortByName}>Name</th>
                                <th scope="col" onClick={sortByAge}>Age</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((employee, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.occupation}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div className='cardview'>
                    {filteredData.map((employee, id) => {
                        return (
                            <div className="card" key={id}>
                                <div className="card-container">
                                    <img src="profile-pic.png" alt="Avatar" style={{ width: '100%' }} />
                                    <h4><b>{employee.name}</b></h4>
                                    <p>{employee.age} Years</p>
                                    <p className="title">{employee.occupation}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {searchQuery ? <InfoBanner text='You are viewing filtered results!' /> : <></>}
        </div>
    )
}
