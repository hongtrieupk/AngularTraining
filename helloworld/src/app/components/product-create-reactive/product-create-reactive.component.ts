import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create-reactive',
  templateUrl: './product-create-reactive.component.html',
  styleUrls: ['./product-create-reactive.component.scss']
})
export class ProductCreateReactiveComponent {
  createProductForm: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.createProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null),
      imgUrl: new FormControl(null)
    });

    this.createProductForm.controls.name.setValue('New Name');
    this.createProductForm.patchValue({
      price: 111,
      imgUrl: 'img/test.png'
    });
  }

  onSubmit(): void {
    console.log(this.createProductForm.value);
    console.log(this.createProductForm.controls.price.value);
  }
}
