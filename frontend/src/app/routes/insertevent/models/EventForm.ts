export class EventForm {
  question: string;
  type: string;
  answers: Array<string>;

  constructor() {
    this.answers = [];
    this.type = "Type";
  }

}
