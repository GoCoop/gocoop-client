import getCoopDetailsService from "@/api/services/coop/getCoopDetailsService";

export type Req = {
  name: string;
};

export default class GET {
  static async details(req: Req) {
    return await getCoopDetailsService(req)
  }
}