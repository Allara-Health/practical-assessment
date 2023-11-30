import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

// Example Query
const GET_PATIENTS = gql`
  query patients {
    patients {
      id
      firstName
      lastName
    }
  }
`;

function Home() {
    const { loading, error, data } = useQuery(GET_PATIENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <div>
        <h1>Patients</h1>
        <ul>
          {data.patients.map((patient: any) => (
            <li key={patient.id}>
              <Link to={`/patients/${patient.id}`}>
                {patient.firstName} {patient.lastName}
              </Link>
            </li>
          ))}
        </ul>
        </div>
    )
}

export default Home;