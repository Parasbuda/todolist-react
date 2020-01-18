import React, { Component } from 'react'
import Todoitem from "./todoitem"

 class Todolist extends Component {
     
    render() {
        const {item,clear,remove,edit}=this.props
        return (
           <ul className="collection">
               <h5 className="center blue-text">Todo List</h5>
               {
                   item.map(itm=>{
                    return(
                        <Todoitem key={itm.id} 
                        title={itm.item}
                        remo={()=>remove(itm.id)}
                        edit={()=>edit(itm.id)}/>
                    )
                   })
               }
              
               <button className="btn waves-effect col s12 red" onClick={clear} >Clear</button>
               
           </ul>
        )
    }
}
export default Todolist
