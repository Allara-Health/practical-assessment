import { dataStore } from "../database";

// GraphQL Resolvers with Types
const resolvers = {
    Query: {
        patient: async (_parent, args) => {
            return dataStore.patient(args.id);
        },
        patients: async (_parent, _args) => {
            return dataStore.patients();
        },
        labs: async (_parent, _args) => {
            return dataStore.labs();
        },
        lab: async (_parent, args) => {
            return dataStore.lab(args.id);
        },
        insurances: async (_parent, _args) => {
            return dataStore.insurances();
        },
        insurance: async (_parent, args) => {
            return dataStore.insurance(args.id);
        },
        appointments: async (_parent, _args) => {
            return dataStore.appointments();
        },
        appointment: async (_parent, args) => {
            return dataStore.appointment(args.id);
        }
    },
    Patient: {
        labs: async (patient, _args) => {
            return dataStore.labs().filter(l => l.patientId === patient.id);
        },
        insurance: async (patient, _args) => {
            return dataStore.insurances().find(i => i.patientId === patient.id);
        },
        appointments: async (patient, _args) => {
            return dataStore.appointments().filter(a => a.patientId === patient.id);
        }
    },
    Lab: {
        patient: async (lab, _args) => {
            return dataStore.patient(lab.patientId);
        }
    },
    Insurance: {
        patient: async (insurance, _args) => {
            return dataStore.patient(insurance.patientId);
        }
    },
    Appointment: {
        patient: async (appointment, _args) => {
            return dataStore.patient(appointment.patientId);
        }
    }

};

export default resolvers;

