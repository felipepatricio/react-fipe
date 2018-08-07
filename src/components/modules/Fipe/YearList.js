import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { headers, baseApi } from '../../../config'

class YearList extends Component {
  constructor() {
    super()
    this.state = {
      years: []
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.brandVehicle !== prevProps.brandVehicle){
      fetch(`${baseApi}/fipe/find-years/carro/${this.props.brandVehicle}`, {
        method: 'GET',
        headers: headers
      })
        .then( response=> response.json()
          .then(data => {
            let years = data.data.map(year => <option key={year.year_model} value={year.year_model}>{year.year_model}</option>)
            this.setState({years: years})
          })
        )
        .catch(error => console.log(error))
      }
  }

  handleYearChange = event => {
    return this.props.handleChange(event)
  }

  render() {
    return(
      <FormControl>
        <InputLabel htmlFor="year-native-simple">Ano</InputLabel>
        <Select
            native
            value={this.state.yearVehicle}
            onChange={this.handleYearChange}
            inputProps={{
              name: 'year-vehicle',
              id: 'year-native-simple',
            }}
          >
          <option/>
        {this.state.years}
        </Select>
      </FormControl>
    )
  }
}

export default YearList
