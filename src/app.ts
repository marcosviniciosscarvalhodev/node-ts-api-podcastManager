import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcastsController";
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/httpMethods";

   export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // Querry string
  //http://localhost:3636/api/episode?p=flow
    const baseUrl = req.url?.split("?")[0];

    // Routes
    if (req.method === httpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if (req.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
}