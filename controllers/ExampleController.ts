import {FastifyInstance} from "fastify";
import pkg from "../package.json";


export default class ExampleController {

    private router: FastifyInstance

    constructor(router: FastifyInstance) {
        this.router = router

        router.get('/api',this.sayHello.bind(this))

        router.get('/api/healthcheck',(req, res)=>{
            const healthcheck = {
                "name": pkg.name,
                "version": pkg.version,
                "time": Date.now()
            };
            try {
                res.send(healthcheck);
            } catch (e) {
                res.status(503).send();
            }
        });
    }

    async sayHello(): Promise<string> {
        return 'Hello, friend'
    }

}

