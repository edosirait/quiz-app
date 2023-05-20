export interface Question {
  question: string;
  options: OptionChoices[];
  answerId: number;
}

export interface OptionChoices {
  labelText: string;
  active: boolean
}
