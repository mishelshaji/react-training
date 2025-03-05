function Border(){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="col-span-1 h-16 bg-red-300 sm:bg-red-600 md:bg-red-900"></div>
            <div className="col-span-1 h-16 bg-green-300 sm:bg-green-600 md:bg-green-900"></div>
            <div className="md:hidden col-span-1 h-16 bg-blue-300 sm:bg-blue-600 md:bg-blue-900"></div>
        </div>
    )
}

export default Border;
