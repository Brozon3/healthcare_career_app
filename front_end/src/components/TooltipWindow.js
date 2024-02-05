import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';

const TooltipWindow = (({jobTitle}) => {
    return (
        <Tooltip>
            <b>Job Title: </b> <u>{jobTitle}</u>
            <br/>
            <b>Average Salary: </b> 
            <br/>
            <b>Program Name: </b>
            <br/>
            <b>Program Length: </b>
            <br/>
            <b>Certification: </b>
            <br/>
            <b>School: </b>
            <br/>
            <b>Website: </b>
            <br/>
            <b>Notes: </b>
            <br/>
        </Tooltip>
    );
});

export default TooltipWindow;