const Grid4 = () => {
    return (<>
    <style jsx>{`
    .outermain{
        width:90vw;
        margin: 0 auto;
    }
    .grid1,.grid2,.grid3,.grid4{
        padding: calc(2vh + 2vw);
        border:2px solid red;  
    }
    `}</style>
    <div className="outermain row">
    <div className="col-6 col-md-3 grid1">1</div>
    <div className="col-6 col-md-3 grid2">2</div>
    <div className="col-6 col-md-3 grid3">3</div>
    <div className="col-6 col-md-3 grid4">4</div>        
    </div>
    </>);
}
export default Grid4;