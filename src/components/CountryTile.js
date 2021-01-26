import React from 'react'

const CountryTile = props =>{
    
    return (
        <li className={props.selectStatus} onClick={props.click}>            
            {props.placeName}
        </li>        
    )
}

export default CountryTile