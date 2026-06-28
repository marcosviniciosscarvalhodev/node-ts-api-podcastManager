import { podcastTransferModel } from "../models/podcastTransferModel";
import { repositoryPodcast } from "../repositories/podcastsRepository";
import { statusCode } from "../utils/statusCode";

export const serviceListEpisodes = async (): Promise<podcastTransferModel> => {

  // define o contrato
  let responseFormat: podcastTransferModel = {
    statusCode: 0,
    body: [],
  }

  // busca os dados
  const data = await repositoryPodcast();

  //verifica o tipo de resposta
  responseFormat = {
    statusCode : data.length !==0 ? statusCode.OK : statusCode.NO_CONTENT,
    body : data,
  }

  return responseFormat;
}