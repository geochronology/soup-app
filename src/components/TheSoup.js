import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { soupify } from "../actions";

const TheSoup = props => {
  // const [soups, setSoups] = useState([])

  const { soups, getSoups, isLoading } = props

  useEffect(() => {
    console.log(getSoups)
    console.log('asdfasd')
  }, [])

  return (
    <div>
      {soups.map(soup => (
        <img
          src={soup.urls.small}
          alt={soup.user.username}
        />
      ))}
      <button onClick={() => getSoups()}>Moar Soup</button>

    </div>
  )
}

const mapStateToProps = ({ isLoading, soups, error }) => ({
  isLoading,
  soups,
  error
})

const mapDispatchToProps = dispatch => ({
  getSoups: () => dispatch(soupify())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheSoup)

