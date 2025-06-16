import { Controller, Get, Post, Tags, Summary, Body } from "staller-plugin";
import { Request, Response } from "express";
    @Tags("pets")
    @Controller("/pets")
    export default class petsController {
        @Get("/:id?")
        @Summary("Get pets by ID or all")
        get(req: Request, res: Response) {
            res.json(req.params.id ? { id: req.params.id, name: "buddy" } : [{ id: "1", name: "buddy" }]);
        }

        @Post("/")
        @Summary("Create a new pets")
        @Body({ name: { type: "string", required: true } })
        create(req: Request, res: Response) {
            res.status(201).json({ id: "2", name: req.body.name });
        }
    }
