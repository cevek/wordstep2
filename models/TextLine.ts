import {DAO} from "../lib/tsorm/src/dao";
export interface TextLineEntity {
    id: number;
    lang: number;
    start: number;
    dur: number;
    postId: number;
    lineId: number;
    text: string;
}


export class TextLine extends DAO<TextLineEntity> {

}
