import React, { useState } from 'react';
import CountryList from './CountryList'
import CountryTile from './CountryTile'



const App = props => {

  const countryData = props.data.places
  const favouritePlace = props.data.favoritePlaceId

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <CountryList 
            countryData = {countryData}
            favouritePlace = {favouritePlace}/>
        </div>
      </div>
    </div>
  )
}

export default App;
