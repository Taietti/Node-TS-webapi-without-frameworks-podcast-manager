import { repoPodcast } from "../data/podcasts-repository"
import type { PodcastTransferModel } from "../models/filter-podcast-model"
import { statusCode } from "../utils/http-statuscode"

export const serviceListEpisodes = async ():  Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: []
        }
        
    const data = await repoPodcast()

    responseFormat = {statusCode: data.length > 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body: data
    }

    return responseFormat
}