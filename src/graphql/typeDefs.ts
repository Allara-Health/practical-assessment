
// GraphQL type definitions
export const typeDefs = `#graphql
    type Patient {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        dob: String!
        sexAtBirth: String!
        labs: Lab[]
        insurance: Insurance
        appointments: Appointment[]
    }

    type Lab {
        id: ID!
        patientId: ID!
        name: String!
        date: String!
    }

    type Insurance {
        id: ID!
        patientId: ID!
        name: String!
        address: String!
        phoneNumber: String!
    }

    type Appointment {
        id: ID!
        startTime: String!
        duration: Int!
        patientId: ID!
        providerName: String!
        appointmentType: String!
    }

    type Query {
        patients: [Patient]
        patient(id: ID!): Patient
        labs: [Lab]
        lab(id: ID!): Lab
        insurances: [Insurance]
        insurance(id: ID!): Insurance
        appointments: [Appointment]
        appointment(id: ID!): Appointment
    }
`;