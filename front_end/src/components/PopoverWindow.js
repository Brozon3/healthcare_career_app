import Popover from 'react-bootstrap/Popover';

function PopoverWindow() {
    return(
        <Popover id="popover-basic">
            <Popover.Header as="h3">Job Title</Popover.Header>
            <Popover.Body>
                <b>Average Salary:</b>
                <br/>
                <b>School:</b>
                <br/>
                <b>Program Name:</b>
                <br/>
                <b>Program Length:</b>
                <br/>
                <b>Website:</b>
                <br/>
                <b>Notes:</b>
            </Popover.Body>
        </Popover>
    )
}

export default PopoverWindow;