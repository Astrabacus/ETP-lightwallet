import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AdvancedPage } from './advanced.page'

const routes: Routes = [
  {
    path: '',
    component: AdvancedPage
  },
  {
    path: 'multisig',
    loadChildren: () => import('./multisig/multisig.module').then(m => m.MultisigPageModule)
  },
  {
    path: 'certificates',
    loadChildren: () => import('./certificates/certificates.module').then(m => m.CertificatesPageModule)
  },
  {
    path: 'export-xpub',
    loadChildren: () => import('./export-xpub/export-xpub.module').then( m => m.ExportXpubPageModule)
  },
  {
    path: 'burn',
    loadChildren: () => import('./burn/burn.module').then( m => m.BurnPageModule)
  },
  {
    path: 'decode',
    loadChildren: () => import('./decode/decode.module').then( m => m.DecodePageModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedPageRoutingModule { }
