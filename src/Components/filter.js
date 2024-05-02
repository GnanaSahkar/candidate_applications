import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { filterJobs } from '../redux/Actions/filterActions';

const Filter = () => {
    const dispatch = useDispatch();
    const [minBasePay, setMinBasePay] = useState('');
    const [location, setLocation] = useState('');
    const [remote, setRemote] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [experience, setExperience] = useState('');
    const [role, setRole] = useState('');

    const handleFilter = () => {
        dispatch(filterJobs({ 
            minBasePay, 
            location, 
            remote, 
            companyName,
            experience,
            role
        }));
    };

    return (
        <div>
            <TextField label="Minimum Base Pay Salary" value={minBasePay} onChange={(e) => setMinBasePay(e.target.value)} />
            <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <FormControlLabel
                control={<Checkbox checked={remote} onChange={(e) => setRemote(e.target.checked)} />}
                label="Remote"
            />
            <TextField label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <TextField label="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
            <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleFilter}>
                Apply Filters
            </Button>
        </div>
    );
};

export default Filter;
