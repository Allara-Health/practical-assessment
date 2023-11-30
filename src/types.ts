import { dataStore } from "./database/index";

// GraphQL Context
export type GraphQLContext = {
    dataStore: typeof dataStore;
};

// Types for data that is stored in the database
export type AppointmentType = 'Initial MD' | 'Followup Nutrition' | 'Initial Nutrition' | 'Followup MD'

export type Patient = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    sexAtBirth: string;
};

export type Lab = {
    id: string;
    patientId: string;
    name: string;
    date: string;
};

export type Insurance = {
    id: string;
    patientId: string;
    name: string;
    address: string;
    phoneNumber: string;
}

export type Appointment = {
    id: string;
    startTime: string;
    duration: number;
    patientId: string;
    providerName: string;
    appointmentType: AppointmentType;
};

