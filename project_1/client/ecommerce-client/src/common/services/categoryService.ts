import httpClient from "../httpClient.ts";
import Result from "../types/Result.ts";
import Category from "../types/category.ts";

export default class CategoryService{
    static getAll() {
        return httpClient.get<Result<Category[]>>('/category/');
    }

    static getOne(id: number){
        return httpClient.get<Result<Category>>('/category/' + id);
    }

    static create(name: string, description: string) {
        return httpClient.post<Result<Category>>('/category/', {name, description});
    }

    static update(id: number, name: string, description: string) {
        return httpClient.put<Result<Category>>('/category/' + id, {name, description});
    }

    static delete(id: number) {
        return httpClient.delete<Result<Category>>('/category/' + id);
    }
}
