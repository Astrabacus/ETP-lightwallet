import { Component, OnInit, OnDestroy } from '@angular/core'
import { Platform } from '@ionic/angular'
import { MetaverseService } from '../services/metaverse.service'
import { AppService } from '../services/app.service'
import { Title } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  network: string
  isApp: boolean

  networkSubscription: Subscription
  translateSubscription: Subscription

  selectOptions: any = {
    header: 'Network',
  }

  constructor(
    public metaverse: MetaverseService,
    public appService: AppService,
    public platform: Platform,
    private title: Title,
    private translate: TranslateService,
  ) {

  }

  async ngOnInit() {
    this.networkSubscription = this.appService.network$.subscribe(network => {
      this.network = network
    })
    this.translateSubscription = this.translate.onLangChange.subscribe(async () => {
      const title = await this.translate.get('LOGIN.TITLE').toPromise() || 'MyETPWallet'
      this.title.setTitle(title)

      this.selectOptions.header = await this.translate.get('LOGIN.NETWORK').toPromise()
    })
  }

  ngOnDestroy() {
    if (this.translateSubscription) {
      this.translateSubscription.unsubscribe()
    }
    if (this.networkSubscription) {
      this.networkSubscription.unsubscribe()
    }
  }

  setNetwork(network) {
    this.appService.updateNetwork(network)
  }


}
