import { Component } from '@angular/core';
import { ItemsComponent } from 'src/app/items/items.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from '../../shared/navigation/navigation.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
