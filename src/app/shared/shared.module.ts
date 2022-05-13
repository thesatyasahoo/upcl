import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { HorizontalMenuItems } from './menu-items/horizontal-menu-items';


@NgModule({
  declarations: [],
  exports: [],
  providers: [MenuItems, HorizontalMenuItems],
})
export class SharedModule {}
