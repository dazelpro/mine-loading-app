import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'mine-workspace-not-found',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  template: `
    <div class="block align-items-center  w-full h-screen text-center">
      <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">404 | Page Not Found</div>
      <p class="text-700 text-2xl mt-0 mb-6 text-center">Sorry, we couldn't find <strong>{{ router }}</strong> route page.</p>
      <span></span>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NotFoundComponent {

  router = inject(Router).routerState.snapshot.url

}
