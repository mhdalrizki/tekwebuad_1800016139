import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HalamanBaruComponent } from '../pages/halaman-baru/halaman-baru.component';
import { HalamanNewComponent } from '../pages/halaman-new/halaman-new.component';


const routes: Routes = [
	{
		path: 'halaman-baru',
		component:HalamanBaruComponent  

	},
	{
		path: 'halaman-new',
		component:HalamanNewComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
