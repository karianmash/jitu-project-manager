import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../auth/service/auth.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'addproject', component: AddProjectComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
