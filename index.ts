import * as Koa from "koa";
import * as Router from "koa-router";
import {inject, bindInjection} from "./lib/dits/index";
import {Post} from "./models/Post";
import {Line} from "./models/Line";
import {DBConfig} from "./lib/tsorm/src/DBConfig";
import {Speaker} from "./models/Speaker";

const app = new Koa();
const router = new Router();


bindInjection(DBConfig, {
    user: 'root',
    password: '',
    database: 'wordstep_test'
});


const Posts = inject(Post);
const Lines = inject(Line);
const Speakers = inject(Speaker);


async function test() {
    const data = await Posts.findAll({
        include: [
            {relation: Posts.videoFile},
            {relation: Posts.coverFile},
            {
                relation: Posts.lines,
                params: {
                    include: [
                        {relation: Lines.enText},
                        {relation: Lines.ruText},
                        {relation: Lines.hero},
                    ]
                }
            },
        ]
    });
    console.log(data);

}

// test().catch(e => console.error(e.stack));

router.get('/', async function (ctx, next) {
    await next();
    const data = await Posts.findAll({
        where: Posts.id.equal(67969718472096),
        include: [
            {relation: Posts.videoFile},
            {relation: Posts.coverFile},
            {
                relation: Posts.lines,
                params: {
                    include: [
                        {relation: Lines.enText},
                        {relation: Lines.ruText},
                        {
                            relation: Lines.hero,
                            params: {
                                include: [{relation: Speakers.photoFile}]
                            }
                        },
                    ]
                }
            },
        ]
    });
    ctx.body = data;
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8070);