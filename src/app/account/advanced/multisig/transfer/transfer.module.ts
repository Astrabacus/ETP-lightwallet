import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { TransferPageRoutingModule } from './transfer-routing.module'

import { TransferPage } from './transfer.page'
import { TranslateModule } from '@ngx-translate/core'
import { ClipboardModule } from 'ngx-clipboard'
import { PipesModule } from 'src/app/pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClipboardModule,
    TranslateModule.forChild(),
    TransferPageRoutingModule,
  ],
  declarations: [TransferPage]
})
export class TransferPageModule {}
