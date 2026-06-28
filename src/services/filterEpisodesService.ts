import { repositoryPodcast } from "../repositories/podcastsRepository"
import { podcastTransferModel } from "../models/podcastTransferModel";
import { statusCode } from "../utils/statusCode";

export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<podcastTransferModel> => {
    // define a interface de retorno
    let responseFormat : podcastTransferModel = {
        statusCode : 0,
        body: [],
    }

    // buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString) //retornando o dado ja tratado

    //verifica o tipo de resposta
  responseFormat = {
    statusCode : data.length !==0 ? statusCode.OK : statusCode.NO_CONTENT,
    body : data,
  }

    return responseFormat;
}