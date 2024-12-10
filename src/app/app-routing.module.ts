import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ServiceComponent } from './component/service/service.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { BoardingComponent } from './component/boarding/boarding.component';
import { MigrationComponent } from './component/migration/migration.component';
import { IntegrationComponent } from './component/integration/integration.component';
import { ApiComponent } from './component/api/api.component';
import { SupportComponent } from './component/support/support.component';
import { FeaturesComponent } from './component/features/features.component';
import { AffiliateComponent } from './component/affiliate/affiliate.component';
import { AdvertiserComponent } from './component/advertiser/advertiser.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'on-boarding', component: BoardingComponent },
  { path: 'migration', component: MigrationComponent },
  { path: 'integration', component: IntegrationComponent },
  { path: 'api-integration', component: ApiComponent },
  { path: 'customer-support', component: SupportComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'affiliate-network', component: AffiliateComponent },
  {path:'advertisers',component:AdvertiserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
