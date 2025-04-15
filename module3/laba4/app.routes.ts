import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';

export const routes: Routes = [
  { path: 'page1', component: Page1Component, canActivate: [confirmInGuard] },
  { path: 'page2', component: Page2Component, canDeactivate: [confirmOutGuard] },
  { path: 'page3', component: Page3Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }
];
