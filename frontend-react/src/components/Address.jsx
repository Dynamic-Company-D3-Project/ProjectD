function Address({addressType,streetName,houseNo,country,state,city,zip})
{
    return(
        <div className='card card bg-base-100 shadow-xl' style={{width:300}}>
            <h5 className='card-header'style={{fontSize :24,backgroundColor:"grey"}}>{addressType}</h5>
           <div className='card-body' >
            <h5 className='card-title' style={{fontSize: 19,color:"blue"}}>Address Info :</h5>
            <p className='card-text'>{streetName},</p>
            <p className='card-text'>{houseNo},</p>
            <p className='card-text'>{country},{state}</p>
            <p className='card-text'>{city},{zip}</p>
            </div> 
        </div>
    )
}

export default Address