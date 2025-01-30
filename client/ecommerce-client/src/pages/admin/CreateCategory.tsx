import Button from "../../components/Button.tsx";

function CreateCategory(){
    return(
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-4xl font-bold text-center'}>Create Category</h1>

            <form className={'mt-10'}>
                <div>
                    <label>Name</label>
                    <input type="text"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           required/>
                </div>

                <div>
                    <label>Description</label>
                    <textarea rows={3}
                              className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                              required/>
                </div>

                <div className={'flex justify-end'}>
                    <Button type="submit" content="Save" severity="primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateCategory
