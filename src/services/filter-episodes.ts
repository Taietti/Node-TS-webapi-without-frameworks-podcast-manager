import { repoPodcast } from "../data/podcasts-repository"
import type { PodcastTransferModel } from "../models/filter-podcast-model";
import { statusCode } from "../utils/http-statuscode";

export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] ?? ""
    
    const data = await repoPodcast(queryString);

    
    responseFormat.statusCode = data.length > 0 ? statusCode.OK : statusCode.NO_CONTENT

    responseFormat.body = data
    
    return responseFormat
}