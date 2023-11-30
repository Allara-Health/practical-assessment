import { Patient, Insurance, Lab, Appointment } from '../types';

export const insuranceData: Insurance[] = [
    {
      "id": "5ea2d757-6fda-4b4d-a5e9-37afde70580d",
      "patientId": "7b62057c-ddf1-4056-bb59-9590c9880dbc",
      "name": "HealthCorp Ltd.",
      "address": "789 Oak St",
      "phoneNumber": "345-678-9012"
    },
    {
      "id": "66767146-331c-423e-99c7-8bb19e32b300",
      "patientId": "2f03a885-89a0-429a-9626-1b2eacf818e2",
      "name": "HealthyLife Providers",
      "address": "202 Pine St",
      "phoneNumber": "345-678-9012"
    },
    {
      "id": "96ae2266-4f81-4778-9f84-b992db10b267",
      "patientId": "c61dc601-f306-4915-a833-b51568063c2b",
      "name": "GlobalHealth Inc.",
      "address": "456 Elm St",
      "phoneNumber": "123-456-7890"
    },
    {
      "id": "355c016c-d3f1-413c-b84e-348d1aaf3a5e",
      "patientId": "0ddf20fd-22f3-4df1-a9ea-11c772d89ebb",
      "name": "PrimeCare Network",
      "address": "101 Maple Ave",
      "phoneNumber": "123-456-7890"
    },
    {
      "id": "fc0a9e85-4835-4526-8fca-1029f1a87d24",
      "patientId": "9c0fe2c3-1418-4007-b798-325fb80365eb",
      "name": "MediCare Services",
      "address": "456 Elm St",
      "phoneNumber": "456-789-0123"
    }
  ]

  export const appointmentData: Appointment[] = [
    {
      "id": "3f4329f6-1bea-4bea-aecf-de3f5a168e7c",
      "startTime": "2023-12-11T14:45:00.000Z",
      "duration": 60,
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "providerName": "Dr. Brown",
      "appointmentType": "Initial MD"
    },
    {
      "id": "4f8cdadb-7d3c-4d50-93c2-472b2987127f",
      "startTime": "2023-12-02T20:30:00.000Z",
      "duration": 60,
      "patientId": "7b62057c-ddf1-4056-bb59-9590c9880dbc",
      "providerName": "Dr. Williams",
      "appointmentType": "Initial MD"
    },
    {
      "id": "a5b58398-ee3d-4197-9a7b-289fbd4e1f4c",
      "startTime": "2023-12-21T20:45:00.000Z",
      "duration": 30,
      "patientId": "7b62057c-ddf1-4056-bb59-9590c9880dbc",
      "providerName": "Dr. Smith",
      "appointmentType": "Followup Nutrition"
    },
    {
      "id": "011b5402-76a7-494e-a6ac-c1e291d80d9e",
      "startTime": "2023-11-19T20:00:00.000Z",
      "duration": 60,
      "patientId": "7b62057c-ddf1-4056-bb59-9590c9880dbc",
      "providerName": "Dr. Smith",
      "appointmentType": "Initial Nutrition"
    },
    {
      "id": "1d5a8984-31c2-4cb4-b9de-e386ec9f5f58",
      "startTime": "2023-11-03T16:00:00.000Z",
      "duration": 60,
      "patientId": "16889c74-c6f2-4559-9843-183d4e25e669",
      "providerName": "Dr. Brown",
      "appointmentType": "Initial MD"
    },
    {
      "id": "ae2b67f9-79bc-42ab-a727-784055d7b60e",
      "startTime": "2023-12-18T21:30:00.000Z",
      "duration": 30,
      "patientId": "16889c74-c6f2-4559-9843-183d4e25e669",
      "providerName": "Dr. Johnson",
      "appointmentType": "Followup MD"
    },
    {
      "id": "227ac063-28f2-4153-a21f-05a66e8a23c3",
      "startTime": "2023-12-17T20:30:00.000Z",
      "duration": 45,
      "patientId": "2f03a885-89a0-429a-9626-1b2eacf818e2",
      "providerName": "Dr. Brown",
      "appointmentType": "Initial MD"
    },
    {
      "id": "22f1569a-4f7a-4e65-8381-fe0e0d8d7448",
      "startTime": "2023-10-08T18:30:00.000Z",
      "duration": 60,
      "patientId": "b6b56aab-acce-43f9-a11f-a6872c5f1311",
      "providerName": "Dr. Jones",
      "appointmentType": "Initial MD"
    },
    {
      "id": "fbec1370-0e61-451d-b521-6ab6b145dea9",
      "startTime": "2023-12-13T20:30:00.000Z",
      "duration": 30,
      "patientId": "b6b56aab-acce-43f9-a11f-a6872c5f1311",
      "providerName": "Dr. Jones",
      "appointmentType": "Followup MD"
    },
    {
      "id": "0cba29d8-4d76-4833-9c9b-edc8ac6f6884",
      "startTime": "2023-11-18T19:15:00.000Z",
      "duration": 45,
      "patientId": "c61dc601-f306-4915-a833-b51568063c2b",
      "providerName": "Dr. Johnson",
      "appointmentType": "Initial MD"
    },
    {
      "id": "d2653f65-a1ab-4c45-be49-2dfbbc59b515",
      "startTime": "2023-12-06T15:45:00.000Z",
      "duration": 30,
      "patientId": "2e68efb0-fe72-4a3e-b269-26a9f16abcdf",
      "providerName": "Dr. Brown",
      "appointmentType": "Initial Nutrition"
    }
  ]
  
  export const patientData: Patient[] = [
    {
      "id": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "dob": "1985-04-15T00:00:00Z",
      "sexAtBirth": "male"
    },
    {
      "id": "7b62057c-ddf1-4056-bb59-9590c9880dbc",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "dob": "1990-08-12T00:00:00Z",
      "sexAtBirth": "female"
    },
    {
      "id": "16889c74-c6f2-4559-9843-183d4e25e669",
      "firstName": "Alice",
      "lastName": "Johnson",
      "email": "alice.johnson@example.com",
      "dob": "1978-11-20T00:00:00Z",
      "sexAtBirth": "female"
    },
    {
      "id": "2f03a885-89a0-429a-9626-1b2eacf818e2",
      "firstName": "Bob",
      "lastName": "Miller",
      "email": "bob.miller@example.com",
      "dob": "1995-03-10T00:00:00Z",
      "sexAtBirth": "male"
    },
    {
      "id": "b6b56aab-acce-43f9-a11f-a6872c5f1311",
      "firstName": "Charlie",
      "lastName": "Brown",
      "email": "charlie.brown@example.com",
      "dob": "1982-05-18T00:00:00Z",
      "sexAtBirth": "male"
    },
    {
      "id": "c61dc601-f306-4915-a833-b51568063c2b",
      "firstName": "Emily",
      "lastName": "Davis",
      "email": "emily.davis@example.com",
      "dob": "1989-06-24T00:00:00Z",
      "sexAtBirth": "female"
    },
    {
      "id": "2e68efb0-fe72-4a3e-b269-26a9f16abcdf",
      "firstName": "Frank",
      "lastName": "Wilson",
      "email": "frank.wilson@example.com",
      "dob": "1993-09-30T00:00:00Z",
      "sexAtBirth": "male"
    },
    {
      "id": "0ddf20fd-22f3-4df1-a9ea-11c772d89ebb",
      "firstName": "Grace",
      "lastName": "Anderson",
      "email": "grace.anderson@example.com",
      "dob": "1975-02-05T00:00:00Z",
      "sexAtBirth": "female"
    },
    {
      "id": "40dd8d64-c4b2-414a-8597-71abc6751c22",
      "firstName": "David",
      "lastName": "Taylor",
      "email": "david.taylor@example.com",
      "dob": "1987-12-15T00:00:00Z",
      "sexAtBirth": "male"
    },
    {
      "id": "9c0fe2c3-1418-4007-b798-325fb80365eb",
      "firstName": "Fiona",
      "lastName": "White",
      "email": "fiona.white@example.com",
      "dob": "1992-07-22T00:00:00Z",
      "sexAtBirth": "female"
    }
  ]

  export const labData: Lab[] = [
    {
      "id": "c224e181-8c54-4f15-8ee1-18dd0e8551bb",
      "name": "Cholesterol Test",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-06-04T20:34:58.522976"
    },
    {
      "id": "83c65cdf-6d6f-42b4-8388-d7859d655063",
      "name": "X-Ray",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-05-26T20:34:58.523029"
    },
    {
      "id": "c46ac39e-f2d2-4d8c-8ce7-95dcb8461bc4",
      "name": "MRI",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-01-02T20:34:58.523073"
    },
    {
      "id": "5bc8903f-b335-4bde-958c-d95b76bc9e7a",
      "name": "Diabetes Test",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-04-15T20:34:58.523167"
    },
    {
      "id": "6ab37e56-0bcb-44e4-898a-8375dda0c57d",
      "name": "MRI",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-10-14T20:34:58.523264"
    },
    {
      "id": "eb98f1ff-97e2-4e5b-81d2-123069c8e327",
      "name": "X-Ray",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-07-15T20:34:58.523319"
    },
    {
      "id": "897b9724-97e4-4a2f-851c-ce7c15ede9e6",
      "name": "Liver Function Test",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-06-28T20:34:58.523366"
    },
    {
      "id": "8a3a002a-e492-4cdd-9f07-8d6d4bb46aca",
      "name": "X-Ray",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-02-05T20:34:58.523381"
    },
    {
      "id": "23216e62-e810-4c9d-bd85-d536cbbe6db0",
      "name": "X-Ray",
      "patientId": "20620c23-f66f-401d-bc4b-4501ed2d796e",
      "date": "2023-07-19T20:34:58.523397"
    },
    {
      "id": "841fa516-5852-4c07-8b0f-3389df8a0a79",
      "name": "Blood Test",
      "patientId": "16889c74-c6f2-4559-9843-183d4e25e669",
      "date": "2023-03-06T20:34:58.523780"
    },
    {
      "id": "99a81b89-4e1a-4d9e-8454-78181b444861",
      "name": "X-Ray",
      "patientId": "16889c74-c6f2-4559-9843-183d4e25e669",
      "date": "2023-09-14T20:34:58.523889"
    },
    {
      "id": "d1eb7788-c603-4ab4-8c30-6f16a60109b3",
      "name": "MRI",
      "patientId": "b6b56aab-acce-43f9-a11f-a6872c5f1311",
      "date": "2023-04-29T20:34:58.524293"
    },
    {
      "id": "ef5d4dea-cc5d-401f-a612-14bc8cfa69a6",
      "name": "Thyroid Test",
      "patientId": "2e68efb0-fe72-4a3e-b269-26a9f16abcdf",
      "date": "2023-07-09T20:34:58.524549"
    },
    {
      "id": "7ca081fb-9c3c-42c1-bd5b-90e2e0e1647c",
      "name": "Cholesterol Test",
      "patientId": "2e68efb0-fe72-4a3e-b269-26a9f16abcdf",
      "date": "2023-07-08T20:34:58.524622"
    },
    {
      "id": "de96184e-d758-48ae-9c3a-c35f56a076ce",
      "name": "Thyroid Test",
      "patientId": "40dd8d64-c4b2-414a-8597-71abc6751c22",
      "date": "2023-10-20T20:34:58.525011"
    },
    {
      "id": "3290c37d-1b99-4cea-99bd-ae30cda87e4d",
      "name": "X-Ray",
      "patientId": "40dd8d64-c4b2-414a-8597-71abc6751c22",
      "date": "2023-08-30T20:34:58.525102"
    },
    {
      "id": "986a9c27-4ef7-4473-82f3-0afc5cd501ec",
      "name": "Blood Test",
      "patientId": "40dd8d64-c4b2-414a-8597-71abc6751c22",
      "date": "2023-02-25T20:34:58.525154"
    },
    {
      "id": "8c2a6513-6970-41d7-983c-8deaae139da6",
      "name": "Thyroid Test",
      "patientId": "40dd8d64-c4b2-414a-8597-71abc6751c22",
      "date": "2023-07-26T20:34:58.525165"
    }
  ]
  