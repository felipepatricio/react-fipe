import React, { Component } from 'react'
import BrandList from './BrandList'
import ModelList from './ModelList'
import YearList from './YearList'
import VersionList from './VersionList'
import ValueVehicle from './ValueVehicle'

class Fipe extends Component {
  constructor() {
    super()
    this.state = {
      brandVehicle: -1,
      modelVehicle: -1,
      yearVehicle: -1,
      versionVehicle: -1,
      valueVehicle: 'Não informado',
    }
  }

  handleBrandChange = event => this.setState({ brandVehicle: event.target.value })

  handleYearChange = event => this.setState({ yearVehicle: event.target.value })

  handleModelChange = event => this.setState({ modelVehicle: event.target.value })

  handleVersionChange = event => this.setState({ versionVehicle: event.target.value })

  handleValueChange = event => this.setState({ valueVehicle: event.target.value })

  render() {
    return(
      <form>
        <BrandList
          handleChange={this.handleBrandChange}
        >
        </BrandList>
        <br/>
        <YearList
          brandVehicle={this.state.brandVehicle}
          handleChange={this.handleYearChange}
        >
        </YearList>
        <br/>
        <ModelList
          brandVehicle={this.state.brandVehicle}
          yearVehicle={this.state.yearVehicle}
          handleChange={this.handleModelChange}
        >
        </ModelList>
        <br/>
        <VersionList
          brandVehicle={this.state.brandVehicle}
          modelVehicle={this.state.modelVehicle}
          yearVehicle={this.state.yearVehicle}
          handleChange={this.handleVersionChange}
        >
        </VersionList>
        <ValueVehicle
          brandVehicle={this.state.brandVehicle}
          modelVehicle={this.state.modelVehicle}
          yearVehicle={this.state.yearVehicle}
          versionVehicle={this.state.versionVehicle}
          handleChange={this.handleValueChange}
        />
      </form>
    )
  }
}

export default Fipe
