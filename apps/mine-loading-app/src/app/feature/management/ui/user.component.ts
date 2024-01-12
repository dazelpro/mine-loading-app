import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { UserManagementService } from '../data-access/user-management.service';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'mine-workspace-user',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, ReactiveFormsModule, FormsModule, InputTextModule, ButtonModule, DropdownModule],
  template: `
    <div class="flex justify-content-end flex-wrap my-4">
      <p-button (click)="showDialog()" icon="pi pi-external-link" label="Add User"></p-button>
    </div>

    <p-table [value]="users() || []" [tableStyle]="{ 'min-width': '50rem' }">
      <ng-template pTemplate="header">
          <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Password</th>
              <th>Role </th>
              <th>Associated Mine ID  </th>
              <th>Email  </th>
              <th>Last Login Time</th>
              <th>Action</th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-data>
          <tr>
              <td>{{ data.id }}</td>
              <td>{{ data.username }}</td>
              <td>{{ data.password }}</td>
              <td>{{ data.role }}</td>
              <td>{{ data.associated_mine_id }}</td>
              <td>{{ data.email }}</td>
              <td>{{ data.last_login_time }}</td>
              <td>
                <p-button label="Edit" [text]="true"></p-button>
                <p-button label="View" [text]="true"></p-button>
              </td>
          </tr>
      </ng-template>
    </p-table>

    <p-dialog header="Add User" [(visible)]="visible" [closable]="false" [modal]="true" [breakpoints]="{ '960px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
      <form [formGroup]="formRegister" class="grid gap-0">
          <div class="col-12 lg:col-6">      
            <label for="email1" class="block text-900 font-medium mb-2">Username</label>
            <input id="email1" type="text" formControlName="username" name="username" placeholder="Username" pInputText class="w-full mb-3">
          </div>

          <div class="col-12 lg:col-6">      
            <label for="password1" class="block text-900 font-medium mb-2">Email</label>
            <input id="password1" type="password" formControlName="email" name="email" placeholder="Email" pInputText class="w-full mb-3">
          </div>

          <div class="col-12 lg:col-6">      
            <label for="email1" class="block text-900 font-medium mb-2">Password</label>
            <input id="email1" type="text" formControlName="password" name="password" placeholder="password" pInputText class="w-full mb-3">
          </div>

          <div class="col-12 lg:col-6">      
            <label for="password1" class="block text-900 font-medium mb-2">Role</label>
            <p-dropdown appendTo="body"  [options]="roles()" formControlName="role" name="role" placeholder="role" optionLabel="name" [showClear]="true" placeholder="Select a Role" [style]="{'minWidth':'100%'}"></p-dropdown>
          </div>

          <div class="col-12">      
            <label for="password1" class="block text-900 font-medium mb-2">Associated Mine</label>
            <p-dropdown appendTo="body"  [options]="mines()" formControlName="role" name="role" placeholder="role" optionLabel="name" [showClear]="true" placeholder="Select a Mine" [style]="{'minWidth':'100%'}"></p-dropdown>
          </div>


          <div class="col-12">      
            <label for="password1" class="block text-900 font-medium mb-2">Associated Warehouse</label>
            <p-dropdown appendTo="body"  [options]="mines()" formControlName="role" name="role" placeholder="role" optionLabel="name" [showClear]="true" placeholder="Select a Warehouse" [style]="{'minWidth':'100%'}"></p-dropdown>
          </div>

      </form>

      <ng-template pTemplate="footer">
        <p-button type="submit" pRipple label="Cancel" [text]="true" (click)="closeDialog()"></p-button>
        <p-button type="submit" [disabled]="!formRegister.valid" pRipple label="Submit"></p-button>
      </ng-template>
    </p-dialog>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  users = toSignal(inject(UserManagementService).getUsers())
  roles = toSignal(inject(UserManagementService).getRoles())
  mines = toSignal(inject(UserManagementService).getMines())

  formRegister = inject(FormBuilder).group({
    username: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
    role: [null, [Validators.required]],
  })

  visible = false

  showDialog() {
    this.visible = true
  }

  closeDialog() {
    this.visible = false
    this.formRegister.reset()
  }
}
