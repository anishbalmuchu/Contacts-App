import { Component, OnInit } from "@angular/core";

import { contacts } from "../../../assets/mock-data/data";

@Component({
  selector: "app-view-contact",
  templateUrl: "./view-contact.component.html",
  styleUrls: ["./view-contact.component.scss"],
})
export class ViewContactComponent implements OnInit {
  columnDefs = [
    { field: "firstName", flex: 1, minWidth: 150, maxWidth: 400, resizable: true, sortable: true },
    { field: "lastName", flex: 1, minWidth: 150, maxWidth: 400, resizable: true, sortable: true },
    { field: "email", flex: 1, minWidth: 300, maxWidth: 400, resizable: true, sortable: true },
    { field: "phone", flex: 1, minWidth: 150, maxWidth: 400, resizable: true, sortable: true },
    { field: "status", flex: 1, minWidth: 50, maxWidth: 100, sortable: true },
  ];
  rowData = [...contacts];

  constructor() {}

  ngOnInit() {
    //Call service fetch data
  }
}
