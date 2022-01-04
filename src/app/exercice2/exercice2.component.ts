import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild("valueInput", { static: true })
  public el: ElementRef<HTMLInputElement>;

  setValue() {
    this.valeur = this.el.nativeElement.value;
  }

  constructor() {}

  ngOnInit() {}
}
