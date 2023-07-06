import { Component, OnInit } from '@angular/core'
import { LanguageService } from 'src/app/services/language.service'
import { Location } from '@angular/common'

export class Language {
  constructor(public label: string, public key: string) { }
}

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})

export class LanguagePage implements OnInit {

  languages: Language[]

  constructor(
    private language: LanguageService,
    private location: Location,
  ) { }

  async ngOnInit() {
    this.languages = []

    const langObj = await this.language.getLanguages()

    Object.keys(langObj).forEach(key => {
      this.languages.push({
        key,
        label: langObj[key].name
      })
    })
  }

  select(key) {
    this.language.set(key)
    this.location.back()
  }

}
