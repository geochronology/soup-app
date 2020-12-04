import React, { useState, useEffect, Fragment } from 'react'
import { connect } from "react-redux";
import { soupify } from "../actions";
import { Noms } from "./Noms";

const TheSoup = props => {
  // const [soups, setSoups] = useState([])

  const { soups, getSoups, nomData } = props

  useEffect(() => {
    console.log('Nom Data: ', nomData)
  }, [nomData])

  return (
    <div>
      {soups.map((soup, idx) => (
        <Fragment key={idx}>
          <img
            src={soup.urls.small}
            alt={soup.user.username}
          // key={idx}
          />

          {/* <Noms key={soup.id} nomData={nomData[soup.id]} /> */}
        </Fragment>
      ))}
      <button onClick={() => getSoups()}>Moar Soup</button>

    </div>
  )
}

const mapStateToProps = ({ isLoading, soups, error, nomData }) => ({
  isLoading,
  soups,
  error,
  nomData
})

const mapDispatchToProps = dispatch => ({
  getSoups: () => dispatch(soupify())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheSoup)

