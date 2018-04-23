import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingComponent } from './marketing.component';

@NgModule({
    imports: [CommonModule, MarketingRoutingModule],
    declarations: [MarketingComponent]
})
export class MarketingModule {}
