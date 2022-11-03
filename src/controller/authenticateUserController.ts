import { Request, Response } from "express";
import { authenticateUserService } from "../services/authenticateUserService";


class authenticateUserController {
    async handle(request:Request, response:Response){

        const { code } = request.body;
        const service = new authenticateUserService();
        try{
            const result = await service.execute(code)
            return response.status(200).json(result);
        }catch(err){
            return response.status(400).json({error: err.message});
        }   
    }
}

export  { authenticateUserController };
