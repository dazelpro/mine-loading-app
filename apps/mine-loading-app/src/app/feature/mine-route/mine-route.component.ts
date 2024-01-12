import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { MineProfielComponent } from './mine-profiel/mine-profiel.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { TrucksComponent } from './trucks/trucks.component';
import { LotComponent } from './lot/lot.component';
@Component({
  selector: 'mine-workspace-mine-route',
  standalone: true,
  imports: [TabViewModule, CardModule, MineProfielComponent, AllocationsComponent, TrucksComponent, LotComponent],
  template: `
    <h1>Mine and Route Management</h1>
    
    <p-tabView>
      <p-tabPanel header="Mine Profiel">
      <mine-workspace-mine-profiel></mine-workspace-mine-profiel>
      </p-tabPanel>
      <p-tabPanel header="Allocations">
      <mine-workspace-allocations></mine-workspace-allocations>
      </p-tabPanel>
      <p-tabPanel header="Trucks">
      <mine-workspace-trucks></mine-workspace-trucks>
      </p-tabPanel>
      <p-tabPanel header="LOT">
      <mine-workspace-lot></mine-workspace-lot>
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
