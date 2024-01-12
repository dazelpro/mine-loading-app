import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SimpleService } from './simple.service';

@Component({
  standalone: true,
  imports: [RouterModule, ToastModule],
  selector: 'mine-workspace-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  simpleService = inject(SimpleService)
  messageService = inject(MessageService)

  ngOnInit(): void {
    this.simpleService.getSuccess().subscribe( {
      next: (result) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: result });
      }
    })

    this.simpleService.getFailed().subscribe( {
      next: (result) => {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: result });
      }
    })
  }
}
