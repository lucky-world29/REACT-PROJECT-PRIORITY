import { Link } from "react-router-dom";

function DoctorCard({doctor}){

  return(

    <div className="card  mb-3" style={{padding:"30px"}}>

      <h4>{doctor.name}</h4>

      <p>{doctor.specialization}</p>

      <Link className="btn btn-primary" to={`/book/${doctor.id}`}>
        Book Appointment
      </Link>

    </div>

  )

}

export default DoctorCard