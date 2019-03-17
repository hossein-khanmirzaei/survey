import { Gender } from './gender.enum';

export class RatingAnswer {
    constructor(
        public questionCode: string,
        public answerCode: string,
    ) { }
}

export class SurveyAnswer {
    constructor(
        public nationalCode: string,
        public age: number,
        public gender: Gender,
        public relationCode: number,
        public selectedSurveyType: string,
        public directCommentChoice: number,
        public directCommentAnswer: string,
        public ratingAnswers: RatingAnswer[],
        public overallValue: number
    ) { }
}

export interface ISurveyData {
    National_Code: string,
    Gender: number,
    Age: number,
    Relation_Code: number,
    Selection_Code: number,
    Message_For: number,
    Message: string,
    Overall_Rate: number,
    [key: string]: any
}