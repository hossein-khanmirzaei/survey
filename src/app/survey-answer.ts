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
    ) { }
}