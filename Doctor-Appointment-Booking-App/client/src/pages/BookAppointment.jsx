import { useParams } from "react-router-dom";

function BookAppointment(){

  const {id} = useParams()

  return(

    <div className="container mt-4">

      <h2>Book Appointment</h2>

      <p>Doctor ID: {id}</p>

      <input className="form-control mb-3" placeholder="Patient Name"/>

      <input type="date" className="form-control mb-3"/>

      <button className="btn btn-success">
        Confirm Appointment
      </button>

    </div>

  )

}

export default BookAppointment