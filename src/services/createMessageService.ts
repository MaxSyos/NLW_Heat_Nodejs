import prismaClient from "../prisma";

import { io } from "../app";

class createMessageService {
    async execute(text: string, user_id: string){
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id,
            },
            include:{
                user: true
            }
        })

        const infoWS = {
            text: message.text,
            user_id: message.user_id,
            create_at: message.create_at,
            user:{
                name: message.user.name,
                avatar: message.user.avatar_url
            }
        }

        io.emit("new_message", infoWS)


        return message
    }
}

export  { createMessageService };

