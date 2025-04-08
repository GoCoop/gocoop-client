import getCoopsService from "@/api/services/coops/getCoopsService";

export type Req = {
  search: string;
  category: string;
};

export default class GET {
  static async SearchFor(req: Req) {
    return await getCoopsService(req)
  }
}