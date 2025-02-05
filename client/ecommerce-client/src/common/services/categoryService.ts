import httpClient from "../httpClient.ts";
import Result from "../types/Result.ts";
import Category from "../types/category.ts";

export default class CategoryService{
    static getAll() {
        return httpClient.get<Result<Category[]>>('/category/');
    }
}
