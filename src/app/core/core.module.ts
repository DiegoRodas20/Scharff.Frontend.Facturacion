import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRepository } from './repositories/client.repository';
import { CoinRepository } from './repositories/coin.repository';
import { BusinessGroupRepository } from './repositories/businessGroup.repository';
import { EconomicSectorRepository } from './repositories/economicSector.repository';
import { TypeDocumentIdentyRepository } from './repositories/typeDocumentIdentity.repository';
import { SegmentationRepository } from './repositories/segmentation.repository';
import { HoldingRepository } from './repositories/holding.repository';
import { TypeContactRepository } from './repositories/typContact.repository';
import { AreaContactRepository } from './repositories/areaContact.repository';
import { ContactRepository } from './repositories/contact.repository';
import { AddressRepository } from './repositories/address.repository';
import { TypeDirectionRepository } from './repositories/typeDirection.repository';
import { ProvinceRepository } from './repositories/province.repository';
import { DistrictRepository } from './repositories/distric.repository';
import { CountryRepository } from './repositories/country.repository';
import { ClientWebRepository } from '../data/repository/client/web/client-web.repository';
import { ContactWebRepository } from '../data/repository/client/web/contact-web.repository';
import { AddressWebRepository } from '../data/repository/client/web/address-web.repository';
import { CoinMockRepository } from '../data/repository/client/mock/coin-mock.repository';
import { BusinessMockRepository } from '../data/repository/client/mock/businessGroup.repository';
import { EconomicSectorMockRepository } from '../data/repository/client/mock/economicSector.repository';
import { TypeDocumentIdentyMockRepository } from '../data/repository/client/mock/typeDocumentIdenty.repository';
import { SegmentationMockRepository } from '../data/repository/client/mock/segmentation.mock.repository';
import { HoldingMockRepository } from '../data/repository/client/mock/holding-mock.repository';
import { TypeContactMockRepository } from '../data/repository/client/mock/typeContact-mock.repository';
import { AreaContactMockRepository } from '../data/repository/client/mock/areaContact-mock.repository';
import { TypeDirectionMockRepository } from '../data/repository/client/mock/typeDocument-mock.repository';
import { ProvinceMockRepository } from '../data/repository/client/mock/province-mock.repository';
import { DistrictMockRepository } from '../data/repository/client/mock/district-mock.repository';
import { CountryMockRepository } from '../data/repository/client/mock/country-mock.repository';
import { UtilsRepository } from './repositories/utils.repository';
import { UtilsWebRepository } from '../data/repository/utils/web/utils-web.repository';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [
        { provide: ClientRepository, useClass: ClientWebRepository },
        { provide: UtilsRepository, useClass: UtilsWebRepository },
        { provide: ContactRepository, useClass: ContactWebRepository },
        { provide: AddressRepository, useClass: AddressWebRepository },
        
        { provide: CoinRepository, useClass: CoinMockRepository },
        { provide: BusinessGroupRepository, useClass: BusinessMockRepository },
        { provide: EconomicSectorRepository, useClass: EconomicSectorMockRepository },
        { provide: TypeDocumentIdentyRepository, useClass: TypeDocumentIdentyMockRepository },
        { provide: SegmentationRepository, useClass: SegmentationMockRepository },
        { provide: HoldingRepository, useClass: HoldingMockRepository },
        { provide: TypeContactRepository, useClass: TypeContactMockRepository },
        { provide: AreaContactRepository, useClass: AreaContactMockRepository },
        { provide: TypeDirectionRepository, useClass: TypeDirectionMockRepository },
        { provide: ProvinceRepository, useClass: ProvinceMockRepository },
        { provide: DistrictRepository, useClass: DistrictMockRepository },
        { provide: CountryRepository, useClass: CountryMockRepository },
    ]
})

export class CoreModule { }
