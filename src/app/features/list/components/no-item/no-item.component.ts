import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-no-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './no-item.component.html',
  styleUrl: './no-item.component.scss'
})
export class NoItemComponent {

}
