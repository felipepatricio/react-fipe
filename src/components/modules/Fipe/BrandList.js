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

const myInit = {
  method: 'GET',
  headers: headers
}

class BrandList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brands: []
    }
  }


  componentDidMount() {
      fetch(`${baseApi}/fipe/find-brands/carro`, myInit)
      .then((response) => {
      response.json()
        .then(data => {
          let brands = data.data.map(brand => <option key={brand.brand_id} value={brand.brand_id}>{brand.brand}</option>)
          this.setState({brands: brands})
        })
      })
        .catch(err => console.log(err))
  }
  handleBrandChange = event => {
    this.props.handleChange(event)
  }

  render() {
    return(
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Marca</InputLabel>
        <Select
            native
            value={this.state.brandVehicle}
            onChange={this.handleBrandChange}
            inputProps={{
              name: 'brand',
              id: 'brand-native-simple',
            }}
          >
          <option/>
        {this.state.brands}
        </Select>
      </FormControl>
    )
  }
}

export default BrandList
