import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import  { getProfile }  from '../actions/home'
import { selectHome } from '../reducers/home'
const mapDispatchToProps = {
    getProfile
}

const mapStateToProps = (state) => ({
    homeData: state
})

class About extends Component {
    render() {
        const {
            getProfile = () => {},
            homeData = {}
        } = this.props;

        return (
          <div>
              <h2>Home</h2>
              <button onClick={getProfile}>click</button>
              <p>{homeData.name}</p>
          </div>
        )
    }
}

About.propTypes = {
    getProfile: PropTypes.func.isRequired,
    homeData: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(About)