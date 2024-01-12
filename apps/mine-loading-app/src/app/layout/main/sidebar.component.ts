import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, AvatarModule],
  template: `
    <div class="h-full shadow-2 hidden lg:block" style="width: 360px;">
      <div class="px-5 py-2 bg-blue-900 text-white">
        <h2>Mine Loading - Application</h2>
      </div>

      <div class="sidenav">
        <h3 class="px-4">Sample Navigation</h3>

        <ul>
          @for (route of routes(); track route.name) {
            <li class="flex align-items-center px-4 py-3 gap-2 cursor-pointer hover:bg-blue-50" [routerLink]="route.link" [routerLinkActive]="activeClass">
              <i [class]="route.icon" class=""></i>
              {{ route.name }}
            </li>
          }
        </ul>

        <!-- <h3 class="px-4">Applicant Navigation</h3> -->


      </div>
    </div>
  `,
  styles: `
    .sidenav {
        overflow-x: hidden;
    }
    .sidenav ul {
        list-style-type: none;
        padding: 0;
        
    }
  `
})
export class SidebarComponent {

  routes = signal([
    // {
    //   name: 'Dashboard',
    //   link: '/main/dashboard',
    //   icon: 'pi pi-home'
    // },
    {
      name: 'Mine and Route Management',
      link: '/main/mine-route',
      icon: 'pi pi-map'
    },
    // {
    //   name: 'Truck Management',
    //   link: '/main/job-create',
    //   icon: 'pi pi-truck'
    // },
    // {
    //   name: 'Loading Operations',
    //   link: '/main/applicant-list',
    //   icon: 'pi pi-cog'
    // },
    // {
    //   name: 'Reporting and Analytics',
    //   link: '/main/applicant-list-detail',
    //   icon: 'pi pi-chart-line'
    // },
    // {
    //   name: 'Security and Data Management',
    //   link: '/main/recruitment-data-master',
    //   icon: 'pi pi-shield'
    // },
    {
      name: 'Users Management',
      link: '/main/user-management',
      icon: 'pi pi-user'
    }
  ])

  activeClass = 'text-primary border-left-3 bg-blue-50'
}
