import {Request, Response} from "express";
import {getManager} from "typeorm";
import { Pais } from "../entity/pais.entity";

export const getAllPais = async (req:Request,res:Response) => {

    const repository = getManager().getRepository(Pais)

    const result = await repository.find()
    res.status(200).json(result)
}