import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [DashboardComponent, ProjectsComponent],
  imports: [SharedModule, CommonModule, UserRoutingModule],
  exports: [DashboardComponent],
})
export class UserModule {}
