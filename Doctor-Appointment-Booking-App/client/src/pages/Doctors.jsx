import DoctorCard from "../components/DoctorCard"

function Doctors(){

  const doctors = [

    {id:1,name:"Dr. Sharma",specialization:"Cardiologist"},
    {id:2,name:"Dr. Rao",specialization:"Dentist"},
    {id:3,name:"Dr. Patel",specialization:"Neurologist"},   
    {id:4,name:"Dr. Singh",specialization:"Pediatrician"},
    {id:5,name:"Dr. Gupta",specialization:"Orthopedic"},
    {id:6,name:"Dr. Mehta",specialization:"Dermatologist"},
    {id:7,name:"Dr. Verma",specialization:"Gynecologist"},
    {id:8,name:"Dr. Khan",specialization:"Psychiatrist"},
    {id:9,name:"Dr. Das",specialization:"Ophthalmologist"},
    {id:10,name:"Dr. Iyer",specialization:"ENT Specialist"},
    {id:11,name:"Dr. Nair",specialization:"Endocrinologist"},
    {id:12,name:"Dr. Reddy",specialization:"Gastroenterologist"},
    {id:13,name:"Dr. Joshi",specialization:"Oncologist"},
    {id:14,name:"Dr. Kapoor",specialization:"Urologist"},
    {id:15,name:"Dr. Chatterjee",specialization:"Rheumatologist"},
    {id:16,name:"Dr. Banerjee",specialization:"Hematologist"},
    {id:17,name:"Dr. Desai",specialization:"Nephrologist"},
    {id:18,name:"Dr. Malhotra",specialization:"Pulmonologist"},
    {id:19,name:"Dr. Sinha",specialization:"Allergist"},
    {id:20,name:"Dr. Bhattacharya",specialization:"Infectious Disease Specialist"}
  ]

  return(

    <div className="container mt-4">

      <h2>Doctors</h2>

      <div className="row">

        {doctors.map(d=>(
          <div className="col-md-4 mb-3" key={d.id}>
            <DoctorCard doctor={d}/>
          </div>
        ))}

      </div>

    </div>

  )

}

export default Doctors