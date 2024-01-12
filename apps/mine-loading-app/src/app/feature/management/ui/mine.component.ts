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
  selector: 'mine-workspace-mine',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, ReactiveFormsModule, FormsModule, InputTextModule, ButtonModule, DropdownModule],
  template: `
    <div class="flex justify-content-end flex-wrap my-4">
      <p-button (click)="showDialog()" icon="pi pi-external-link" label="Add Mine"></p-button>
    </div>

    <p-table [value]="mines() || []" [tableStyle]="{ 'min-width': '50rem' }">
      <ng-template pTemplate="header">
          <tr>
              <th>Id</th>
              <th>Role Name</th>
              <th>Location</th>
              <th>Operation Status</th>
              <th>Contact Information</th>
              <th>Capacity</th>
              <th>Action</th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-data>
          <tr>
              <td>{{ data.id_mine }}</td>
              <td>{{ data.name }}</td>
              <td>{{ data.location }}</td>
              <td>{{ data.operation_status }}</td>
              <td>{{ data.contact_information }}</td>
              <td>{{ data.capacity }}</td>
              
              <td>
                <p-button label="Edit" [text]="true"></p-button>
                <p-button label="View" [text]="true"></p-button>
              </td>
          </tr>
      </ng-template>
    </p-table>

    <p-dialog header="Add Mine" [(visible)]="visible" [closable]="false" [modal]="true" [breakpoints]="{ '960px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
      <form [formGroup]="formRole" class="grid">
          <div class="col-12">      
            <label for="email1" class="block text-900 font-medium mb-2">Role Name</label>
            <input id="email1" type="text" formControlName="role_name" name="role_name" placeholder="Role name Admin, Driver, Operator, etc." pInputText class="w-full mb-3">
          </div>

      </form>

      <ng-template pTemplate="footer">
        <p-button type="submit" pRipple label="Cancel" [text]="true" (click)="closeDialog()"></p-button>
        <p-button type="submit" [disabled]="!formRole.valid" pRipple label="Submit"></p-button>
      </ng-template>
    </p-dialog>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class MineComponent {
  mines = toSignal(inject(UserManagementService).getMines())

  formRole = inject(FormBuilder).group({
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
    this.formRole.reset()
  }
}
