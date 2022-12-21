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
import { ClientMockRepository } from './data/repository/client/mock/client-mock.repository';

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
    {provide: ClientRepository, useClass: ClientMockRepository}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
