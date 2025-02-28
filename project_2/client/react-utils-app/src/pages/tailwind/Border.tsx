function Border(){
    return (
        <>
            <div className="h-8 bg-sky-50 border">1Px Border</div>
            <br/>
            <div className="h-8 bg-sky-50 border-2">2Px Border</div>
            <br/>
            <div className="h-8 bg-sky-50 border border-t-2 border-b-8">2Px Border</div>
            <br/>
            <div className="h-8 bg-sky-50 border-2 border-green-400">2Px Border</div>
            <br/>
            <div className="h-8 bg-sky-50 border-2 border-t-green-400">2Px Border</div>
        </>
    )
}

export default Border;
