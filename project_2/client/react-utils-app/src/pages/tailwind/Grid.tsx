function Border(){
    return (
        <>
            <div className={'grid grid-cols-2'}>
                <div className={'h-16 bg-indigo-300'}>1</div>
                <div className={'h-16 bg-green-300'}>2</div>
            </div>
            <br/>
            <div className={'grid grid-cols-12'}>
                <div className={'h-16 bg-indigo-300 col-span-10'}>1</div>
                <div className={'h-16 bg-green-300 col-span-2'}>2</div>
            </div>
        </>
    )
}

export default Border;
