import { fetchRequest } from "../fetch"
import { HanleError, PATH } from "../utils"

export const POST_REQUEST = {
    login: async ({ body }: { body: {} }) => {
        try {
            const res = await fetchRequest<{}, {}>({
                url: PATH.POST_LOGIN,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
            
        } catch (err) {
            HanleError(err)
        }
    }
}