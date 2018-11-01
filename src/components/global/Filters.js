import React from 'react'
import {connect} from 'react-redux'
import {Dropdown, Button} from 'semantic-ui-react'
import * as actions from '../../actions'
import Options from '../../services/data'

class Filters extends React.Component{

  handleChange = (event, value) => {
    if(value.name === "parkFilter"){
      this.props.applyParkFilter(value.value)
    } else if (value.name === "cuisineFilter") {
      this.props.applyCuisineFilter(value.value)
    } else if (value.name === "categoryFilter") {
      this.props.applyCategoryFilter(value.value)
    }
  }
  handleClearFilters = () =>{
    this.props.clearAllFilters()
  }

  render(){
    return(
      <div className="filterContainer">
        <div className="filterTitle">Filter Results By:</div>
        <Dropdown
          placeholder={'Park'}
          options={Options.parkOptions}
          selection
          onChange={this.handleChange}
          value={this.props.parkFilter}
          name="parkFilter"
          className="filter"
        />
        <Dropdown
          placeholder={'Cuisine'}
          options={this.props.cuisineOptions}
          selection
          onChange={this.handleChange}
          value={this.props.cuisineFilter}
          name="cuisineFilter"
          className="filter"
        />
        <Dropdown
          placeholder={'Category'}
          options={Options.categoryOptions}
          selection
          onChange={this.handleChange}
          value={this.props.categoryFilter}
          name="categoryFilter"
          className="filter"
        />
        <Button onClick={this.handleClearFilters} size="small">Clear Filters</Button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    parkFilter: state.restaurants.parkFilter,
    cuisineFilter: state.restaurants.cuisineFilter,
    categoryFilter: state.restaurants.categoryFilter,
    cuisineOptions: state.restaurants.cuisineOptions
  }
}

export default connect(mapStateToProps, actions)(Filters)
