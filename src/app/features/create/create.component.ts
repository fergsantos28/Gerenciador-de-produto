import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interfaces/product.interface';
import { GoHomeComponent } from '../../shared/components/go-home/go-home.component';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, GoHomeComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

 productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  

 onSubmit(product: Product) { 
    this.productsService.post(product)
      .subscribe(() => {
          this.matSnackBar.open('Produto criado com sucesso', 'OK',);
      this.router.navigateByUrl('/')

      });
    }
}