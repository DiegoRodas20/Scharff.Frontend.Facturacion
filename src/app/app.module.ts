import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './common/shared/shared.module';
import { AuthModule } from './presentation/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { ClientRepository } from './core/repositories/client.repository';
import { CoinRepository } from './core/repositories/coin.repository';
import { CoinMockRepository } from './data/repository/client/mock/coin-mock.repository';
import { BusinessMockRepository } from './data/repository/client/mock/businessGroup.repository';
import { BusinessGroupRepository } from './core/repositories/businessGroup.repository';
import { EconomicSectorRepository } from './core/repositories/economicSector.repository';
import { EconomicSectorMockRepository } from './data/repository/client/mock/economicSector.repository';
import { TypeDocumentIdentyRepository } from './core/repositories/typeDocumentIdentity.repository';
import { TypeDocumentIdentyMockRepository } from './data/repository/client/mock/typeDocumentIdenty.repository';
import { SegmentationRepository } from './core/repositories/segmentation.repository';
import { SegmentationMockRepository } from './data/repository/client/mock/segmentation.mock.repository';
import { ClientWebRepository } from './data/repository/client/web/client-web.repository';
import { HoldingRepository } from './core/repositories/holding.repository';
import { HoldingMockRepository } from './data/repository/client/mock/holding-mock.repository';
import { TypeContactRepository } from './core/repositories/typContact.repository';
import { TypeContactMockRepository } from './data/repository/client/mock/typeContact-mock.repository';
import { AreaContactRepository } from './core/repositories/areaContact.repository';
import { AreaContactMockRepository } from './data/repository/client/mock/areaContact-mock.repository';
import { ContactRepository } from './core/repositories/contact.repository';
import { ContactMockRepository } from './data/repository/client/mock/contact-mock.repository';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
        
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    AuthModule,

    DataModule,
    CoreModule,
  ],
  providers: [
    DialogService,
    { provide: ClientRepository, useClass: ClientWebRepository },
    { provide: CoinRepository, useClass: CoinMockRepository },
    { provide: BusinessGroupRepository, useClass: BusinessMockRepository },
    { provide: EconomicSectorRepository, useClass: EconomicSectorMockRepository },
    { provide: TypeDocumentIdentyRepository, useClass: TypeDocumentIdentyMockRepository },
    { provide: SegmentationRepository, useClass: SegmentationMockRepository },
    { provide: HoldingRepository, useClass: HoldingMockRepository },
    { provide: TypeContactRepository, useClass: TypeContactMockRepository },
    { provide: AreaContactRepository, useClass: AreaContactMockRepository },
    { provide: ContactRepository, useClass: ContactMockRepository }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
