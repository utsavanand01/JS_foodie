import Recipies from "./recipies";
import VegRoll from "../images/VegRoll.jpg";
import burger from "../images/burger.jpg";
import Momos from "../images/Momos.jpg";
import chowmin from "../images/chowmin.jpg";
import pizza from "../images/pizza.jpg";
import panipuri from "../images/panipuri.jpg";
import paratha from "../images/paratha.jpg";
import chat from "../images/chat.jpg";
import pavbhazi from "../images/pav bhazi.jpg";
import pannerbuttermasala from "../images/pannerbuttermasala.jpg";
import bhelpanipuri from "../images/bhel pani puri.jpg";
import dhosha from "../images/dhosha.jpg";
import { useState } from "react";
const Display = () => {

    const [data,setData] = useState([
        {
            id: 1,
            name:"burger",
            qty : 2,
            amount:50,
        },
        {
            id: 2,
            name:"momos",
            qty : 5,
            amount:40,
        },
        {
            id:3,
            name: "VegRoll",
            qty : 6,
            amount: 60,
        },
        {
            id:4,
            name: "chat",
            qty : 3,
            amount: 60,
        }

    ]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                <div className="row">
                <div className="col-3">
                    <Recipies price="50" name="Veg Roll" img={VegRoll} />
                </div>
                <div className="col-3">
                    <Recipies price="70" name="burger" img={burger}/>
                </div>
                <div className="col-3">
                    <Recipies price="150" name="momos" img={Momos}/>
                </div>
                <div className="col-3">
                    <Recipies price="170" name="chowmin" img={chowmin}/>
                </div>
                <div className="col-3">
                    <Recipies price="160" name="pizza" img={pizza}/>
                </div>
                <div className="col-3">
                    <Recipies price="40" name="panipuri" img={panipuri}/>
                </div>
                <div className="col-3">
                    <Recipies price="120" name="paratha" img={paratha}/>
                </div>
                <div className="col-3">
                    <Recipies price="80" name="chat" img={chat}/>
                </div>
                <div className="col-3">
                    <Recipies price="100" name="pav bhazi" img={pavbhazi}/>
                </div>
                <div className="col-3">
                    <Recipies price="410" name="panner butter masala" img={pannerbuttermasala}/>
                </div>
                <div className="col-3">
                    <Recipies price="75" name="bhel pani puri" img={bhelpanipuri}/>
                </div>
                <div className="col-3">
                    <Recipies price="130" name="dhosha" img={dhosha}/>
                </div>
            
                </div>
            </div>
            <div className="col-4">
                <table className="table table-bordered">
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Amount</th>
                    </tr>
                    {
                        data.map((value,key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.qty}</td>
                                <td>{value.qty * value.amount}</td>

                            </tr>
                        ))
                    }
                </table>
                <a href="" className="btn btn-warning w-100">total: 700/-</a>
                <a href="" className="btn btn-success w-100 mt-2">order now</a>
            </div>
           
            </div>
        </div>

    )

}
export default Display;