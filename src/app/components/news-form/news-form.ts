import { Component, signal } from '@angular/core';
import { BtnPrimary } from "../btn-primary/btn-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Newsletter } from '../../services/newsletter';

@Component({
  selector: 'news-form',
  imports: [ 
    BtnPrimary,
    ReactiveFormsModule
   ],
   providers: [
    Newsletter
   ],
  templateUrl: './news-form.html',
  styleUrl: './news-form.scss',
})
export class NewsForm {

  newsletterForms!: FormGroup;
  loading = signal (false);
  

  constructor(private service: Newsletter){
    this.newsletterForms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    this,this.loading.set(true);
    if(this.newsletterForms.valid){
      this.service.sendData(this.newsletterForms.value.name, this.newsletterForms.value.email).subscribe({
        next: () => {
          this.newsletterForms.reset();
          this,this.loading.set(false);
        }
      })
    }
  }
}
