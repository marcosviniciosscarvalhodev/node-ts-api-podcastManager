import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/listEpisodesService"
import { serviceFilterEpisodes } from "../services/filterEpisodesService";
import { contentType } from "../utils/contentType";
import { podcastTransferModel } from "../models/podcastTransferModel";


const defaultContent = {'content-type': contentType.JSON};

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content: podcastTransferModel = await serviceListEpisodes();
    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body))
  
    res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {


  const content: podcastTransferModel = await serviceFilterEpisodes(req.url)
  res.writeHead(content.statusCode, defaultContent); 
  res.write(JSON.stringify(content.body))

  res.end()
}