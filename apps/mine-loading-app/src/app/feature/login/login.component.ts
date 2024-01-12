import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { SimpleService } from '../../simple.service';
import { Router } from '@angular/router';
import { errorMessage } from '../../shared/utils/error.handler';
@Component({
  selector: 'mine-workspace-login',
  standalone: true,
  imports: [CheckboxModule, ButtonModule, DropdownModule, InputTextModule, ReactiveFormsModule, FormsModule, ToastModule],
  template: `
    <div class="flex justify-content-center p-5 p-0">

      <div class="md:w-6 xl:w-4 w-full">
        <div class="text-center mb-5">
            <div class="text-900 text-4xl font-bold mb-3">Welcome Back</div>
            <div class="text-900 text-xl font-medium mb-3">Mine Workspace Information Management System</div>
        </div>

        <form [formGroup]="formLogin" (ngSubmit)="onLogin()">
            <label for="email1" class="block text-900 font-medium mb-2">Username</label>
            <input id="email1" type="text" formControlName="username" name="username" placeholder="Username" pInputText class="w-full mb-3">

            <label for="password1" class="block text-900 font-medium mb-2">Password</label>
            <input id="password1" type="password" formControlName="password" name="password" placeholder="Password" pInputText class="w-full mb-3">

            <div class="flex align-items-center justify-content-between mb-6 mt-2">
                <div class="flex align-items-center">
                    <p-checkbox id="rememberme1" [binary]="true" styleClass="mr-2"></p-checkbox>
                    <label for="rememberme1" class="text-900">Remember me</label>
                </div>
            </div>

            <button type="submit" [disabled]="!formLogin.valid" pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
        </form>
      </div>

    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  httpClient = inject(HttpClient)
  simpleService = inject(SimpleService)
  messageService = inject(MessageService)

  router = inject(Router)

  formLogin = inject(FormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  

  onLogin() {

    this.httpClient.post('/api/users/login', this.formLogin.getRawValue()).subscribe({
      next: (result: any) => {
        const message = result.message as string
        this.simpleService.success.next(message)
        this.router.navigate(['/main/user-management'])
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
        this.simpleService.failed.next(errorMessage(error))
      },
      complete: () => {
        
      }
    });

  }

}
