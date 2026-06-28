import fs from 'fs';
import path from 'path';
import { podcastModel } from '../models/podcastModel';

const pathData = path.join(__dirname, "../repositories/podcasts.json");
const language = "utf-8"


export const repositoryPodcast = async (podcastName?: string):Promise<podcastModel[]> => { //podcastName(opcional)se for preenchido filtra os dados, caso não seja preenchido, codigo segue normalmente dando ambuiguidade de funcionamento entre filter e lista
    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)



    if(podcastName){ //caso esteja preenchido ele vai ser que nem o jsonFile só que agora com um filtro
        jsonFile = jsonFile.filter((podcast : podcastModel) => podcast.podcastName === podcastName)
    }

    return jsonFile;
}