import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabourCostListComponent } from './features/labour-cost-list/labour-cost-list.component';
import { LabourCostComponent } from './features/labour-cost/labour-cost.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LabourCostEffects } from './features/store/labour-cost.effects';
import { LabourCostReducer } from './features/store/labour-cost.reducer';
import { LabourCostService } from './features/labour-cost.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LabourCostComponent,
    LabourCostListComponent
  ],
  imports: [
    StoreModule.forRoot({ labourCost: LabourCostReducer }),
    EffectsModule.forRoot([LabourCostEffects]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [LabourCostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
