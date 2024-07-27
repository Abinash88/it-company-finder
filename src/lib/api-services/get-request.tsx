import { fetchRequest } from "../fetch"
import { HanleError,  } from "../utils"
import { PATH } from "./routes-path";

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