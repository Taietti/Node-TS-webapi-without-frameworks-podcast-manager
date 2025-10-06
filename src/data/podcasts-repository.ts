import fs from "fs"
import path from "path"
import type { PodcastModel } from "../models/podcast-model"

const pathData = path.join(__dirname, "../data/podcasts.json")

export const repoPodcast = async (podcastName?: string ): Promise<PodcastModel[]>  =>{
    const language = "utf-8"
    const data = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(data)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName.toLocaleLowerCase() === podcastName.toLowerCase())
    }

    return jsonFile
}