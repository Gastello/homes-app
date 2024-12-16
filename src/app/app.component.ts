import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
// Lesson-4: https://angular.dev/tutorials/first-app/04-interfaces
@Component({
  standalone: true,
  selector: "app-root",
  template: `<main>
    <header class="brand-name">
      <img
        src="../assets/logo.svg"
        alt="logo"
        class="brand-logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = "homes";
}
