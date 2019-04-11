export class Question {
    questionCode: string;
    title: string;
    type: string;
    answer: string;
    isAnswerOptional?: boolean;
    options?: string[];
}