import React, {useState, Fragment} from 'react'
import CountryTile from './CountryTile'


const CountryList = props => {
     
    const favouritePlace=props.favouritePlace   

    let message=""
    
    const [countryId,setCountryId]=useState(null)

    const countryComponents=props.countryData.map((place)=>{  
        
        if(countryId===favouritePlace){
            message="What a Beauty" 
        }

        let selectedStatus=""
    
        if(countryId===place.id){
            selectedStatus="done"
        } else {
            selectedStatus=""
        }        
           
        const handleDoneClick = () =>{
            if(countryId!==place.id){
                setCountryId(place.id)
            }else{
                setCountryId(null)
            }  
        }  
     

        return (
            <CountryTile
                key={place.id}
                countryIdState={countryId}
                placeId={place.id}
                placeName={place.name}
                click={handleDoneClick}   
                selectStatus={selectedStatus}                     
            />
        )

    })

    

    return(
            <div>        
                <ul>
                    {countryComponents}  
                </ul>
                <h3>{message}</h3>
            </div>
    )
}

export default CountryList