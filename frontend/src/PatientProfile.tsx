import { useParams } from 'react-router-dom';

const PatientProfile = () => {

    const { id } = useParams();
    return (
       <div className="container">
          <h1>Patient Profile - {id}</h1>
       </div>
    );
   };
   
export default PatientProfile;   