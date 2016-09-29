
import {DAO} from "../lib/tsorm/src/dao";
export interface MediaFileEntity {
    id: number;
    url: string;
    type: number;
}

export class MediaFile extends DAO<MediaFileEntity> {

}
