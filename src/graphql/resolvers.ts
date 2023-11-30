import { dataStore as store } from "../database";


// GraphQL Resolvers with Types
export const resolvers = {
    Query: {
        patients: async (_parent, _args, { dataStore }) => {
            return dataStore.patients();
        },
        patient: async (_parent, args, { dataStore }) => {
            return dataStore.patient(args.id);
        },
        labs: async (_parent, _args, { dataStore }) => {
            return dataStore.labs();
        },
        lab: async (_parent, args, { dataStore }) => {
            return dataStore.lab(args.id);
        },
        insurances: async (_parent, _args, { dataStore }) => {
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
            return dataStore.labsAPI.getLabsByPatientId(patient.id);
        },
        insurance: async (patient, _args, { dataStore }) => {
            return dataStore.insuranceAPI.getInsuranceByPatientId(patient.id);
        },
        appointments: async (patient, _args, { dataStore }) => {
            return dataStore.appointmentsAPI.getAppointmentsByPatientId(patient.id);
        }
    }
};

