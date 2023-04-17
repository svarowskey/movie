import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmCardComponent } from './film-card.component';
import { ButtonAddModule } from '../../../../shared/components/buttons/button-add/button-add.module';
import { ButtonWatchNowModule } from '../../../../shared/components/buttons/button-watch-now/button-watch-now.module';

@NgModule({
  declarations: [FilmCardComponent],
  exports: [FilmCardComponent],
  imports: [CommonModule, ButtonAddModule, ButtonWatchNowModule],
})
export class FilmCardModule {}
