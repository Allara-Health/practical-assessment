import type { Patient, Lab, Insurance, Appointment } from "../types"
import { labData, patientData, insuranceData, appointmentData } from "./data"

// This is a "data store" that holds the data in memory
export const dataStore = {
    patient: (id: string): Patient | undefined => patientData.find(p => p.id === id),
    lab: (id: string): Lab | undefined => labData.find(l => l.id === id),
    insurance: (id: string): Insurance | undefined => insuranceData.find(i => i.id === id),
    appointment: (id: string): Appointment | undefined => appointmentData.find(a => a.id === id),
    patients: (): Patient[] => patientData,
    labs: (): Lab[] => labData,
    insurances: (): Insurance[] => insuranceData,
    appointments: (): Appointment[] => appointmentData,
    patientByPatientId: (patientId: string): Patient | undefined => patientData.find(p => p.id === patientId),
    labByPatientId: (patientId: string): Lab | undefined => labData.find(l => l.patientId === patientId),
    insuranceByPatientId: (patientId: string): Insurance | undefined => insuranceData.find(i => i.patientId === patientId),
    appointmentByPatientId: (patientId: string): Appointment | undefined => appointmentData.find(a => a.patientId === patientId),
}