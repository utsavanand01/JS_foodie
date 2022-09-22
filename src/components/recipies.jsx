import { useState } from "react";
const Recipies = (Props) => {
    let [count, setCount] = useState(0)
    return(
        <div className="card">
            <img src={Props.img} className ="w-100" style={{ height:"150px",objectFit:"cover"}}  alt=""/>
            <div className="card-body p-2 text-center">
                <h3 className="h6 m-0">Rs. {Props.price}/-</h3>
                <h4>{Props.name}</h4>
            </div>
            <div className="card-footer text-center p-1 pb-0">
                <button type="button" className="btn btn-danger btn-sm h5" onClick={()=>setCount((count > 0)? (count=count-1):(count=0))}>-</button>
                <span className="lead">{count}</span>
                <button type="button" className="btn btn-success btn-sm h5" onClick={()=>setCount(count=count+1)()}>+</button>

            </div>
        </div>
    )
}
export default Recipies;