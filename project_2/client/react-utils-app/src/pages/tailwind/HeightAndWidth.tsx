function HeightAndWidth(){
    return (
        <>
            <div className="h-24 w-24 bg-sky-300"></div>
            <div className="h-24 w-full bg-amber-300"></div>

            <div className="h-24 w-[30%] bg-red-300"></div>
            <div className="h-24 w-[250px] bg-indigo-300"></div>

            <div className={'flex'}>
                <div className="h-24 w-1/4 bg-green-300">hgfh</div>
                <div className="h-24 w-3/4 bg-blue-300">hgf</div>
            </div>
            <div className="h-screen w-screen bg-teal-300"></div>
        </>
    )
}

export default HeightAndWidth;
