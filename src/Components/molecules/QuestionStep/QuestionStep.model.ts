import { IFormAnswer } from "Interfaces/quizInterfaces";
import { ChangeEvent } from "react";

export interface IQuestionStep {
    index: number;
    content: string;
    answers: IFormAnswer [];
    values: {answers: string[]};
    handleChange: (e:ChangeEvent<HTMLElement>) => void;
    handleBlur: (e:ChangeEvent<HTMLElement>) => void;
}