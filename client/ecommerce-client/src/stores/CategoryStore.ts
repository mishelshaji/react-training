import { EventEmitter } from 'events';

class CategoryStore extends EventEmitter{
    private categories: string[] = ["Uncategorized"];

    constructor() {
        super();
    }

    getAll(){
        return this.categories;
    }
}

const categoryStore = new CategoryStore();
export default categoryStore;
