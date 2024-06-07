import { fetchRequest } from "../fetch"
import { HanleError, PATH } from "../utils"

export const GET_REQUEST = {
    get_user: async () => {
        try {
            const res = await fetchRequest<{}, {}>({ url: PATH.POST_LOGIN })
            return res ?? undefined;
        } catch (err) {
            return undefined;
        }
    }
}