import { Component } from '@angular/core';
import { SidebarComponent } from './main/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  template: `
    <div class="flex h-screen">
      <app-sidebar />
      
      <div class="p-5 w-screen overflow-auto">
        <router-outlet />
      </div>
    </div>
  `,
  styles: ``
})
export class MainComponent {
}
