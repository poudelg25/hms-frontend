import { Time } from "@angular/common";

export interface Appointment {
    appointmentId: number;
    dateTime: Date;
    doctorId: number;
    patientId: number;
}
