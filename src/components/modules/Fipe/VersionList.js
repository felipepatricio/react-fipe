import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { headers, baseApi } from '../../../config'

class VersionList extends Component {
  constructor() {
    super()
    this.state = {
      versions: []
    }

  }
  componentDidUpdate(prevProps) {
    let brandId = this.props.brandVehicle
    let model = this.props.modelVehicle
    let year = this.props.yearVehicle

    if ( this.props.modelVehicle !== prevProps.modelVehicle ) {
      fetch(`${baseApi}/fipe/find-versions/carro/${brandId}/${model}/${year}`, {
        method: 'GET',
        headers: headers
      })
        .then(response => response.json()
          .then(data => {
            let versions = data.data.map(version => {
              return <option key={version.code} value={version.model_id}>{version.version}</option>
            })
            this.setState({versions: versions})
          })
        )
    }
  }

  handleVersionChange = event => {
    return this.props.handleChange(event)
  }

  render() {
    return(
      <FormControl>
        <InputLabel htmlFor="version-native-simple">Versão</InputLabel>
        <Select
            native
            value={this.state.versionVehicle}
            onChange={this.handleVersionChange}
            inputProps={{
              name: 'version',
              id: 'version-native-simple',
            }}
          >
          <option/>
        {this.state.versions}
        </Select>
      </FormControl>
    )
  }
}

export default VersionList
