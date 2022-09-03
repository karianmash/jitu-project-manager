import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [DashboardComponent, LandingComponent, ProjectsComponent, AddProjectComponent, UsersComponent],
  imports: [SharedModule, CommonModule, AdminRoutingModule],
  exports: [DashboardComponent],
})
export class AdminModule {}
