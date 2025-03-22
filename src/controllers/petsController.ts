import { Controller, Get, Post, Tags, Summary, Body } from "staller-plugin";

    @Tags("pets")
    @Controller("/pets")
    export default class petsController {
        @Get("/:id?")
        @Summary("Get pets by ID or all")
        get(req: any, res: any) {
            res.json(req.params.id ? { id: req.params.id, name: "buddy" } : [{ id: "1", name: "buddy" }]);
        }

        @Post("/")
        @Summary("Create a new pets")
        @Body({ name: { type: "string", required: true } })
        create(req: any, res: any) {
            res.status(201).json({ id: "2", name: req.body.name });
        }
    }
