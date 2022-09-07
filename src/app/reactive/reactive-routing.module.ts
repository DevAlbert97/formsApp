import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basicos', component: BasicsComponent},
      {path: 'dinamicos', component: DinamicsComponent},
      {path: 'switches', component: SwitchesComponent},
      {path: '**', redirectTo: 'basicos'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ReactiveRoutingModule { }
