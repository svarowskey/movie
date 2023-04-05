import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from "./icon/icon.component";
import { ButtonAddComponent } from './buttons/button-add/button-add.component';
import { ButtonWatchNowComponent } from './buttons/button-watch-now/button-watch-now.component';
import { SearchFieldComponent } from './search-field/search-field.component';



@NgModule({
  declarations: [
    IconComponent,
    ButtonAddComponent,
    ButtonWatchNowComponent,
    SearchFieldComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        IconComponent,
        ButtonAddComponent,
        ButtonWatchNowComponent,
        SearchFieldComponent
    ]
})
export class SharedComponentsModule { }
