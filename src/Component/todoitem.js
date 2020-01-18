import React, { Component } from 'react'

class Todoitem extends Component {
    render() {
        const {title,remo,edit}=this.props
        return (
           <li className="collection-item">
              
               <div>{title}<a href="#" className="secondary-content">
                   <i className="material-icons" onClick={remo}>delete</i></a>
                   <a href="#" className="secondary-content" >
                   <i className="material-icons" onClick={edit} >edit</i></a></div>
               
           </li>
        )
    }
}
export default Todoitem
