import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'mine-workspace-mine-route',
  standalone: true,
  imports: [TabViewModule, CardModule],
  template: `
    <h1>Mine and Route Management</h1>
    
    <p-tabView>
      <p-tabPanel header="Mine Profiel">
      </p-tabPanel>
      <p-tabPanel header="Allocations">
      </p-tabPanel>
      <p-tabPanel header="Trucks">
      </p-tabPanel>
      <p-tabPanel header="LOT">
      </p-tabPanel>
    </p-tabView>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export default class MineRouteComponent {

}
