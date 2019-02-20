import { Page } from "./page";

export class Survey {
    surveyId: string;
    pageCount: number;
    surveyTitle: string;
    pages: Page[];
}