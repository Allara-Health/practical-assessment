import type { GraphQLContext } from "../types";

// GraphQL Resolvers with Types
const resolvers = {
    Query: {
        patient: async (_parent, args, { dataStore }: GraphQLContext) => {
           const r =  dataStore.patient(args.id);
           console.log('PATIENT RESOLVERSSSSSSSSS', r);
              return r;
        },
        labs: async (_parent, _args, { dataStore }: GraphQLContext) => {
            return dataStore.labs();
        },
        lab: async (_parent, args, { dataStore }: GraphQLContext) => {
            return dataStore.lab(args.id);
        },
        insurances: async (_parent, _args, { dataStore }: GraphQLContext) => {
            return dataStore.insurances();
        },
        insurance: async (_parent, args, { dataStore }) => {
            return dataStore.insurance(args.id);
        },
        appointments: async (_parent, _args, { dataStore }) => {
            return dataStore.appointments();
        },
        appointment: async (_parent, args, { dataStore }) => {
            return dataStore.appointment(args.id);
        }
    },
    Patient: {
        labs: async (patient, _args, { dataStore }) => {
            return dataStore.labs().filter(l => l.patientId === patient.id);
        },
        insurance: async (patient, _args, { dataStore }) => {
            return dataStore.insurances().find(i => i.patientId === patient.id);
        },
        appointments: async (patient, _args, { dataStore }) => {
            return dataStore.appointments().filter(a => a.patientId === patient.id);
        }
    },
    Lab: {
        patient: async (lab, _args, { dataStore }) => {
            return dataStore.patient(lab.patientId);
        }
    },
    Insurance: {
        patient: async (insurance, _args, { dataStore }) => {
            return dataStore.patient(insurance.patientId);
        }
    },
    Appointment: {
        patient: async (appointment, _args, { dataStore }) => {
            return dataStore.patient(appointment.patientId);
        }
    }

};

export default resolvers;

