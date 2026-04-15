import { Component } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'news-form',
  imports: [ 
    BtnPrimary,
    ReactiveFormsModule
   ],
  templateUrl: './news-form.html',
  styleUrl: './news-form.scss',
})
export class NewsForm {

}
