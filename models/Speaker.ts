import {DAO, Relation, belongsTo, foreignKey} from "../lib/tsorm/src/dao";
import {MediaFile, MediaFileEntity} from "./MediaFile";
import {Field} from "../lib/tsorm/src/sql/DataSource";
export interface SpeakerEntity {
    id: number;
    name: string;
    photo: number;
    postId: number;

    photoFile: MediaFileEntity;
}

export class Speaker extends DAO<{}> {
    @foreignKey(() => MediaFile)
    photo: Field;

    @belongsTo(() => MediaFile)
    photoFile: Relation;
}
