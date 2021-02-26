import DateFnsUtils from '@date-io/date-fns';
import { Button, MenuItem, Modal, TextField } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import './TaskFilter.css';

export class TaskFilter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            open : false
        }
    }

    render(){
        return(
            <div>
                <div className="button-filter">
                    <Button variant="outlined" color="inherit" onClick={this.handleClickOpen}>
                        Filters
                    </Button>
                </div>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClickClose}
                >
                    <div className="filter">
                        <form>
                            <h2> TASK FILTERS</h2>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    id="due-date"
                                    fullWidth
                                    required
                                    placeholder="Due date"
                                >
                                </DatePicker>
                            </MuiPickersUtilsProvider>
                            <br/><br/>
                            <TextField
                                id="responsible"
                                select
                                label="Select Status"
                                fullWidth
                                helperText="(Ready, In Progress, Done)"
                                defaultValue={this.props.statusValues[0]}
                                onChange={this.props.handleStatusChange}
                            >
                                {this.props.statusValues.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                                ))}
                            </TextField>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        });
      };

    handleClickClose = () => {
        this.setState({
            open: false
        });
    };
}