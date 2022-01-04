import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur?: number;
  public result: number = 0;
  @Output() eventResult: EventEmitter<any> = new EventEmitter();

  public incrementer() {
    this.compteur += 1;
    this.result = this.compteur;
    this.eventResult.emit({
      value: this.result,
    });
  }

  public decrementer() {
    this.compteur -= 1;
    this.result = this.compteur;
    this.eventResult.emit({
      value: this.result,
    });
  }

  constructor() {}

  ngOnInit() {}
}
