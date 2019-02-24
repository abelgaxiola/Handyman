import { ExamplesComponent } from "./examples/examples.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Contact", component: ContactComponent },
  { path: "Examples", component: ExamplesComponent },
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "**", redirectTo: "Home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
