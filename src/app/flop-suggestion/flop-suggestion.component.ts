import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Suggestion } from "./Suggestion";

@Component({
  templateUrl: "./flop-suggestion.component.html",
  styles: [
    "input.ng-invalid.ng-touched {border: solid rgba(255, 0, 0, 0.336) !important; border-radius: 8px;}"
  ]
})
export class FlopSuggestionComponent {
  model: any = {};

  suggestions: Suggestion[] = [
    {
      id: 0,
      title: "Ender's Game",
      year: 2013,
      stars: 6.6,
      studio: "Other",
      rating: "PG-13",
      hasSoundtrack: true
    },
    {
      id: 1,
      title: "The Mummy",
      year: 2017,
      stars: 5.4,
      studio: "Universal",
      rating: "PG-13",
      hasSoundtrack: false
    },
    {
      id: 2,
      title: "A Wrinkle in Time",
      year: 2018,
      stars: 4.2,
      studio: "Disney",
      rating: "PG",
      hasSoundtrack: true
    }
  ];

  constructor() {}

  ngOnInit() {}

  editSuggestion(suggestion) {
    this.model = { ...suggestion };
  }

  updateSuggestion(form) {
    if (form.valid) {
      this.resetModel(form);
      let suggestionToUpdate = this.suggestions.find(
        s => s.id === this.model.id
      );

      suggestionToUpdate.title = this.model.title;
      suggestionToUpdate.year = +this.model.year;
      suggestionToUpdate.stars = +this.model.stars;
      this.model = {};
    }
  }

  resetModel(form) {
    console.log(this.model);
    form.form.markAsPristine();
    form.form.markAsUntouched();
  }

  cancel(form) {
    this.model = {};
    this.resetModel(form);
  }
}
