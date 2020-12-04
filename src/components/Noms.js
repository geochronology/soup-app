import React from 'react'

export const Noms = ({ nomData }) => {
  if (!nomData) {
    // loading not yet started
    return <span className="stats">Loading...</span>;
  }
  return (
    <div style={{ marginTop: '4px', marginBottom: '32px' }}>
      {nomData.error && 'o noes'}
      {nomData.isLoading && 'Loading...'}
      {nomData.noms !== null && `${nomData.noms} Noms 😋`}
    </div>
  )
}
