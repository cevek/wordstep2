import {DAO, belongsTo, foreignKey, Relation} from "../lib/tsorm/src/dao";
import {TextLine, TextLineEntity} from "./TextLine";
import {SpeakerEntity, Speaker} from "./Speaker";
import {Field} from "../lib/tsorm/src/sql/DataSource";
import {Post} from "./Post";
export interface LineEntity {
    id: number;
    en: number;
    ru: number;
    postId: number;
    speaker: number;

    hero: SpeakerEntity;
    enText: TextLineEntity;
    ruText: TextLineEntity;
}

export class Line extends DAO<LineEntity> {
    @foreignKey(() => TextLine)
    en: Field;

    @foreignKey(() => TextLine)
    ru: Field;

    @foreignKey(() => Post)
    postId: Field;

    @foreignKey(() => Speaker)
    speaker: Field;

    @belongsTo(() => Speaker)
    hero: Relation;

    @belongsTo(() => TextLine)
    enText: Relation;

    @belongsTo(() => TextLine)
    ruText: Relation;
}