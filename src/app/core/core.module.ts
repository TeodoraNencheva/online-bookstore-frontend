import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class CoreModule { }
