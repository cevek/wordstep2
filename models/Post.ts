import {DAO, hasMany, belongsTo, foreignKey, Relation} from "../lib/tsorm/src/dao";
import {LineEntity, Line} from "./Line";
import {Field} from "../lib/tsorm/src/sql/DataSource";
import {MediaFile, MediaFileEntity} from "./MediaFile";
export interface PostEntity {
    id: number;
    title: string;
    group: string;
    season: string;
    episode: string;
    video: number;
    cover: number;

    videoFile: MediaFileEntity;
    coverFile: MediaFileEntity;
    lines: LineEntity[];
}

export class Post extends DAO<PostEntity> {
    @foreignKey(() => MediaFile)
    video: Field;

    @foreignKey(() => MediaFile)
    cover: Field;

    @hasMany(() => Line)
    lines: Relation;

    @belongsTo(() => MediaFile)
    videoFile: Relation;

    @belongsTo(() => MediaFile)
    coverFile: Relation;
}