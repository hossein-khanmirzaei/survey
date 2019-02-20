import { Question } from "./question";

export class Page {
    pageId: number;
    questionCount: number;
    pageTitle: string;
    questions: Question[];
}