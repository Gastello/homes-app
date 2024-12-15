import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
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
    <section>
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent],
})
export class AppComponent {
  title = "homes";
}
