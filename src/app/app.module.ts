import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { TestimonialComponent } from './component/testimonial/testimonial.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    BoardingComponent,
    MigrationComponent,
    IntegrationComponent,
    ApiComponent,
    SupportComponent,
    FeaturesComponent,
    AffiliateComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
