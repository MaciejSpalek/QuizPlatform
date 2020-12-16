import { IQuestion } from "Interfaces/quizInterfaces";

export interface IScoreWindow {
    score: string;
    quizID: string;
    questions?: IQuestion[];
    closeTheQuiz: () => void;
}