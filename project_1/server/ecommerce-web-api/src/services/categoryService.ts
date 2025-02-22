import db from "../database";

export const getAllCategories = () => {
    const sql = 'SELECT id, name, description FROM categories';
    const stmt = db.prepare(sql);
    return stmt.all();
}

export const getCategoryById = (id: number) => {
    const sql = 'SELECT id, name, description FROM categories WHERE id = ?';
    const stmt = db.prepare(sql);
    return stmt.get(id);
}

export const createCategory = (name: string, description: string) => {
    const sql = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    const stmt = db.prepare(sql);
    return stmt.run(name, description);
}

export const updateCategory = (id: number, name: string, description: string) => {
    const sql = 'UPDATE categories SET name = ?, description = ? WHERE id = ?';
    const stmt = db.prepare(sql);
    return stmt.run(name, description, id);
}

export const deleteCategory = (id: number) => {
    const sql = 'DELETE FROM categories WHERE id = ?';
    const stmt = db.prepare(sql);
    return stmt.run(id);
}
