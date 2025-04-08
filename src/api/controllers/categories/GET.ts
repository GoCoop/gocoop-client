import getCategoriesService from "@/api/services/categories/getCategoryService";

export default class GET {
  static async All() {
    return await getCategoriesService()
  }
}