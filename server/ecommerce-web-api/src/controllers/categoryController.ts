import {Request, Response} from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory
} from "../services/categoryService";

export const getAll = (req: Request, res: Response) => {
    const result = getAllCategories();
    return res.status(200).json(result);
}

export const getOne = (request: Request, res: Response) => {
    const id = Number(request.params.id);
    const result = getCategoryById(id);
    return res.status(200).json(result);
}

export const create = (request: Request, res: Response) => {
    console.log(request.body);
    const {name, description} = request.body;
    const result = createCategory(name, description);
    return res.status(200).json({});
}

export const update = (request: Request, res: Response) => {
    const id = Number(request.params.id);
    const {name, description} = request.body;
    const result = updateCategory(id, name, description);
    return res.status(200).json(result);
}

export const deleteOne = (request: Request, res: Response) => {
    const id = Number(request.params.id);
    const result = deleteCategory(id);
    return res.status(200).json(result);
}
