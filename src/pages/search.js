import React, { Component } from 'react'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick () {
    if (!this.props.upmaster.isFetchingCourse) {
      this.props.actions.fetchUser(this.state)
    }
  }

  render () {
    return (
      <div className="text-center bg-light p-3">
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='60'
            placeholder='Search Courses'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default Search