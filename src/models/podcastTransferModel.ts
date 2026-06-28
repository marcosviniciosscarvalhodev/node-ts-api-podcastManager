import { podcastModel } from "./podcastModel";

export interface podcastTransferModel {
    statusCode : number,
    body: podcastModel[]
}