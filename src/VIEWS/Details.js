import React from 'react'
import { useParams } from 'react-router-dom'
import '../../src/bootstrap.css'
import '../../src/VIEWS/Details.css'
import { useTodo } from './Context'
import {Link} from 'react-router-dom'



export const Details = () => {
    const { id } = useParams();
    const {store, array, handleAddCart, handleNav, navId} = useTodo();
    console.log(id);
    return (
        <main className="row">
            <main className="col-sm">
                <div className="head">
                    {
                        store[id].map((max,i)=>{
                            return <button key={i} onClick={()=>{handleNav(i)}}>
                                <Link to={`/details/${id}/${navId}`} key={i+1}><h2 className="text-primary" key={i+2}>{max.type}</h2></Link>
                            </button>
                        })
                    }
                </div>
                <div className="bodycard">
                   {
                      store[id][navId].model.map((max, i)=>{
                          return <div key={i} className="card phonebody">
                             <h2 key={i+2}>{max.phone}</h2>
                             <img key={i+3} src={max.img} alt="" />
                             <h2>{"$"}{max.price}</h2>
                             <button onClick={()=>{handleAddCart(array[id],store[id][navId].type ,max.phone, max.price)}} className="btn btn-danger w-100" key={i+5}>ADD TO CART</button>
                          </div>
                      })
                   }
                </div>
            </main>
        </main>
    )
}
