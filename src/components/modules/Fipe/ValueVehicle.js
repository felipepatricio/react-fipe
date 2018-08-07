import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { headers, baseApi } from '../../../config'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class ValueVehicle extends Component {
  state = {
    open: false,
    vehicle: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });

  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidUpdate(prevProps) {
    if ( this.props.versionVehicle !== prevProps.versionVehicle ) {
      fetch(`${baseApi}/fipe/find-vehicle/carro/${this.props.brandVehicle}/${this.props.versionVehicle}/${this.props.yearVehicle}`, {
        method: 'GET',
        headers: headers
      })
        .then(response => response.json()
          .then(data => {
            <p>{data.data.value}</p>
            this.setState({vehicle: data.data.value})
          })
        )
    }
  }

  handleValueChange = event => {
    return this.props.handleChange(event)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Quanto vale meu veículo ?</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Seu veículo vale:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.state.vehicle}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ValueVehicle;
