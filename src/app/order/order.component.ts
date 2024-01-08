import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../model';
import { BalFormBundle, BalListBundle } from '@baloise/design-system-components-angular/standalone';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'basic-example-app-order',
  standalone: true,
  imports: [CommonModule, BalListBundle, BalFormBundle, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {

  @Input()
  order: Order | undefined;

  @Output()
  submit = new EventEmitter<Order>();

  form: FormGroup | undefined;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.form = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      address: new FormControl(undefined, Validators.required)
    });
  }

  submitOrder(): void {
    this.form?.markAllAsTouched();
    if (this.form?.valid) {
      this.submit.emit({
        ...this.order,
        name: this.form?.get('name')?.value as string,
        address: this.form?.get('address')?.value as string
      });
      this.resetForm();
    }
  }

}
