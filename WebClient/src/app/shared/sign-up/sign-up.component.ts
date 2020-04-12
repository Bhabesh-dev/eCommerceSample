import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { SharedService } from "../shared.service";
import { Router } from "@angular/router";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

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
  insertedfrom: FormGroup;
  userName: FormControl;
  password: FormControl;
  cpassword: FormControl;
  modalRef: BsModalRef;
  errroList: string[];
  modalMessage: string;

  ngOnInit(): void {}

  @ViewChild("template") modal: TemplateRef<any>;

  onSubmit() {}
}
