import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { UserComponent } from './ui/user.component';
import { RoleComponent } from './ui/role.component';
import { MineComponent } from './ui/mine.component';

@Component({
  selector: 'mine-workspace-user-management',
  standalone: true,
  imports: [TabViewModule, UserComponent, RoleComponent, MineComponent],
  template: `
    <h1>Admin Management</h1>

    <p-tabView>
        <p-tabPanel header="User">
          <mine-workspace-user />
        </p-tabPanel>
        <p-tabPanel header="Role">
          <mine-workspace-role />
        </p-tabPanel>
        <p-tabPanel header="Mine">
          <mine-workspace-mine/>
        </p-tabPanel>
    </p-tabView>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ManagementComponent {

}
