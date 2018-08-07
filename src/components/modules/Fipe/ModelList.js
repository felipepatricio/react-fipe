import React, {Component} from 'react'
// import { withStyles } from '@material-ui/core/styles'
// import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
// import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
// import NativeSelect from '@material-ui/core/NativeSelect'
import { headers, baseApi } from '../../../config'
// import CircularIndeterminate from '../../CircularIndeterminate'


class ModelList extends Component {
  constructor() {
    super()
    this.state = {
      models: []
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.yearVehicle !== prevProps.yearVehicle){
    fetch(`${baseApi}/fipe/find-models/carro/${this.props.brandVehicle}/${this.props.yearVehicle}`, {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json()
        .then(data => {
          let models = data.data.map(model => <option key={model.model} value={model.model}>{model.model}</option>)
          this.setState({models: models})
        })
      )
    }
  }

  handleModelChange = event => this.props.handleChange(event)

  render() {
    return(
      <FormControl>
        <InputLabel htmlFor="brand-native-simple">Modelo</InputLabel>
        <Select
            native
            value={this.state.modelVehicle}
            onChange={this.handleModelChange}
            inputProps={{
              name: 'brand',
              id: 'brand-native-simple',
            }}
          >
          <option/>
        {this.state.models}
        </Select>
      </FormControl>
    )
  }
}

export default ModelList
