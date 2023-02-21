import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { gestionFormulario } from 'src/app/model/interfaces';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent {
  public managementForm: FormGroup;
  name = '';
  price = 0;
  description = '';
  imgRout = '';
  opinion = '';

  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.managementForm = this.formBuilder.group({
      nameFormulario: ['', Validators.required],
      priceFormulario: ['', Validators.required],
      descriptionFormulario: ['', Validators.required],
      imgRoutFormulario: ['', Validators.required],
      opinionFormulario: [''],
    });
  }
  public onSubmit() {
    this.submitted = true;
    if (this.managementForm.valid) {
      const nuevoItem: gestionFormulario = {
        name: this.managementForm.get('name')?.value,
        price: this.managementForm.get('price')?.value,
        description: this.managementForm.get('description')?.value,
        imgRout: this.managementForm.get('imgRout')?.value,
        opinion: this.managementForm.get('opinion')?.value,
      };
      console.log(nuevoItem);
      this.managementForm.reset();
      this.submitted = false;
    }
  }
}
