import React from 'react'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'
import * as actions from '../actions'
import Options from '../services/data'


class Filters extends React.Component{

  handleChange = (event, value) => {
    if(value.name === "parkFilter"){
      this.props.applyParkFilter(value.value)
    } else if (value.name === "cuisineFilter") {
      this.props.applyCuisineFilter(value.value)
    }
  }

  render(){
    return(
      <div>
        <Dropdown
          placeholder={'Filter Results by Park'}
          options={Options.parkOptions}
          selection
          onChange={this.handleChange}
          value={this.props.parkFilter}
          name="parkFilter"
          className="filter"
        />
        <Dropdown
          placeholder={'Filter Results by Cuisine'}
          options={Options.cuisineOptions}
          selection
          onChange={this.handleChange}
          value={this.props.cuisineFilter}
          name="cuisineFilter"
          className="filter"
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    parkFilter: state.parkFilter,
    cuisineFilter: state.cuisineFilter
  }
}

export default connect(mapStateToProps, actions)(Filters)
