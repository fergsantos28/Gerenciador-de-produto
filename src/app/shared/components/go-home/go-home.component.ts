import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-go-home',
  standalone: true,
  imports: [RouterLink,MatButtonModule,MatIconModule],
  templateUrl: './go-home.component.html',
  styleUrl: './go-home.component.scss'
})
export class GoHomeComponent {

  voltar() {
    window.history.back();
  }
}

