import httpClient from "../httpClient";
import Result from "../types/Result";
import Tag from "../types/tag";

export default class TagService {
    static getAll() {
        return httpClient.get<Result<Tag[]>>('/tag/');
    }

    static getOne(id: number) {
        return httpClient.get<Result<Tag>>('/tag/' + id);
    }

    static create(name: string) {
        return httpClient.post<Result<Tag>>('/tag/', { name });
    }

    static update(id: number, name: string) {
        return httpClient.put<Result<Tag>>('/tag/' + id, { name });
    }

    static delete(id: number) {
        return httpClient.delete<Result<Tag>>('/tag/' + id);
    }
}
