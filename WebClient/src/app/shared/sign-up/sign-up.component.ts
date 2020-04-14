import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { SharedService } from "../shared.service";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private router: Router,
    private modalService: BsModalService
  ) {}
  //props
  insertForm: FormGroup;
  username: FormControl;
  password: FormControl;
  cpassword: FormControl;
  email: FormControl;
  modalRef: BsModalRef;
  errorList: string[];
  modalMessage: string;

  ngOnInit(): void {
    this.username = new FormControl("", [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5),
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5),
    ]);
    this.cpassword = new FormControl("", [
      Validators.required,
      this.MustMatch(this.password),
    ]);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.errorList = [];

    this.insertForm = this.fb.group({
      username: this.username,
      password: this.password,
      cpassword: this.cpassword,
      email: this.email,
    });
  }

  @ViewChild("template") modal: TemplateRef<any>;

  onSubmit() {
    let userDetails = this.insertForm.value;
    // this.service.register()
  }

  MustMatch(passwordControl: AbstractControl): ValidatorFn {
    return (
      cpasswordControl: AbstractControl
    ): { [key: string]: boolean } | null => {
      // return null if controls haven't initialised yet
      if (!passwordControl && !cpasswordControl) {
        return null;
      }

      // return null if another validator has already found an error on the matchingControl
      if (cpasswordControl.hasError && !passwordControl.hasError) {
        return null;
      }
      // set error on matchingControl if validation fails
      if (passwordControl.value !== cpasswordControl.value) {
        return { mustMatch: true };
      } else {
        return null;
      }
    };
  }
}
