import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';

export const routes: Routes = [
    {path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'signup', component: SignupComponent },
    {path: 'homepage', component: HomePageComponent },
    {path: 'newAppointment', component: NewAppointmentComponent },
    {path: 'newPatient', component: NewPatientComponent}
];
