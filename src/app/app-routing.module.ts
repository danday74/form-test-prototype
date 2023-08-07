import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'route1',
    loadChildren: () => import('./routes/route1/route1.module').then(m => m.Route1Module)
  },
  {
    path: 'route2',
    loadChildren: () => import('./routes/route2/route2.module').then(m => m.Route2Module)
  },
  {
    path: '**',
    redirectTo: 'route1'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
