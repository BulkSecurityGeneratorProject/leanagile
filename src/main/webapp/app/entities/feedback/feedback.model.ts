import { BaseEntity } from './../../shared';

export const enum FeedbackType {
    'TERRIBLE',
    'BAD',
    'OK',
    'GOOD',
    'AWESOME'
}

export class Feedback implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public rating?: FeedbackType,
    ) {
    }
}
