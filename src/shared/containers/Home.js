import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import  { getProfile }  from '../actions/home'
import { selectHome } from '../reducers/home'
const mapDispatchToProps = {
    profile
}

const mapStateToProps = (state) => ({
    homeData: state
})

class About extends React.Component {
  render() {
      console.log(this.props.homeData)
      return (
          <div>
              <h2>Home</h2>
              <button onClick={this.props.getProfile}>click</button>
              <p>ss</p>
          </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)