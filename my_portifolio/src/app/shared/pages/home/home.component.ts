import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ProjectsComponent } from "../projects/projects.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, AboutComponent, ContactComponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
