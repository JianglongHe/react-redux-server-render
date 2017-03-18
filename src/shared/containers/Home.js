import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { profile } from '../actions/home'

const mapDispatchToProps = {
    profile
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.props.profile}>click</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(About)