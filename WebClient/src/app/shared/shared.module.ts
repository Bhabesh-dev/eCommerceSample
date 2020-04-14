import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LeftNavigationComponent } from "./left-navigation/left-navigation.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent,
    SignUpComponent,
  ],
  providers: [],
})
export class SharedModule {}
