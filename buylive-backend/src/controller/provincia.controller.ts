import {Request, Response} from "express";
import {getManager} from "typeorm";
import { Provincia } from "../entity/provincia.entity";


export const getProvinciaById = async (req:Request,res:Response) => {

    const repository = getManager().getRepository(Provincia)



    const result = await repository.find({where: {pais: req.params.pais}})
    res.status(200).json(result)
}