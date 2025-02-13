import { SyntheticEvent, useEffect, useState } from "react";
import AlertPrimary from "../../../components/alerts/AlertPrimary";
import { Link } from "react-router";
import Tag from "../../../common/types/tag";
import TagService from "../../../common/services/tagService";

function ListTag() {
    const [tags, setTags] = useState<Tag[]>([]);

    useEffect(() => {
        // Fetch all tags from the TagService
        TagService.getAll()
            .then(response => setTags(response.data.data));
    }, []);

    function handleOnDelete(event: SyntheticEvent) {
        if (!confirm('Are you sure you want to delete this tag?')) return;

        const target = event.target as HTMLElement;
        const id = Number(target.dataset.id);

        TagService.delete(id)
            .then(() => {
                alert('Tag deleted successfully.');
                // Remove the deleted tag from the list
                setTags(tags.filter(tag => tag.id !== id));
            });
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Tag List</h1>

            <div className={'flex justify-end'}>
                <Link to="create" className={'underline'}>+ Create Tag</Link>
            </div>

            <table className={'min-w-full border border-gray-200 mt-16'}>
                <thead>
                <tr>
                    <th className={'border border-gray-200 py-2'}>Id</th>
                    <th className={'border border-gray-200 py-2'}>Name</th>
                    <th className={'border border-gray-200 py-2'}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tags.length === 0 && (
                    <tr>
                        <td colSpan={3}>
                            <AlertPrimary message={'No tags.'} />
                        </td>
                    </tr>
                )}

                {tags.length > 0 && (
                    tags.map((tag) => (
                        <tr className={'border border-gray-200'} key={tag.id}>
                            <td className={'border border-gray-200 p-2'}>{tag.id}</td>
                            <td className={'border border-gray-200 p-2'}>{tag.name}</td>
                            <td className={'border border-gray-200 p-2'}>
                                <Link to={`edit/${tag.id}`} className={'text-indigo-600'}>Edit</Link>
                                |
                                <span className={'text-red-600 cursor-pointer'} data-id={tag.id} onClick={handleOnDelete}> Delete</span>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ListTag;
