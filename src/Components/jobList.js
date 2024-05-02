import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import JobCard from './jobCard';
import { fetchJobs } from '../redux/Actions/jobActions';

const JobList = () => {
    const dispatch = useDispatch();
    const { jobs, loading } = useSelector((state) => state.job);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <Grid container spacing={2}>
            {loading ? (
                <Grid item xs={12} align="center">
                    <CircularProgress />
                </Grid>
            ) : (
                jobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <JobCard job={job} />
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default JobList;
