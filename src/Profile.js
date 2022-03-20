const Profile = ({id, name, date, month}) =>{
    return(
<>
  <div className="col-8 border border-success rounded my-5 mx-auto bg-light" key={id}>
          
          <div className="row">
                    <div className ="col-4 d-flex flex-column justify-content-center align-content-center py-2">
                
                <img src="https://www.pngfind.com/pngs/b/470-4703547_privacy-icon-png.png" className="rounded-circle mx-2" alt="Cinque Terre"/> 
           
      
        </div>
        <div className="col-8 d-flex flex-column justify-content-center align-content-center py-5">
      
               <h3>Name: <strong>{name}</strong></h3>
                <h3>BOD: <strong>{date}</strong></h3>

                <button className="btn btn-success mx-auto">Say Happy Birthday to <strong>{name}....!</strong></button>
       
        </div>
                   </div>
                   </div> 
                    </>
                )
    }
                
    export default Profile