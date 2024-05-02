import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const JobCard = ({ job }) => {
    const { title, company, location, description, experience, applyLink } = job;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography color="textSecondary">
                    {company} - {location}
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
                <Typography variant="body2" component="p">
                    Experience Required: {experience}
                </Typography>
                <Button variant="contained" color="primary" href={applyLink}>
                    Apply
                </Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;
