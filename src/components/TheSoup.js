import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

const key = 'yZJNuA9fpZ6Z3lcrMhOPy_4RJm6vMpJsjMd93ChojOo';

const TheSoup = () => {
  const [soups, setSoups] = useState([])

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then(res => res.json())
      .then(soupResults => setSoups(soupResults))
  }, [])

  return (
    <div>
      {soups.map(soup => (
        <img
          src={soup.urls.small}
          alt={soup.user.username}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ isLoading, soups, error }) => ({
  isLoading,
  soups,
  error
})

export default connect(
  mapStateToProps,
  null
)(TheSoup)

