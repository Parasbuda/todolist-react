import React, { Component } from 'react'

 class Form extends Component {
    render() {
       const {input,change,sub,editi}=this.props

        return (
            <div className="card">
                <div className="card-content">
                    <form onSubmit={sub}>
                        <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">text_fields</i>
                            <input type="text" id="item" value={input} onChange={change} placeholder="Add item" ></input> 
                                </div>
                            </div>
                    <div className="row">
                    <button className={editi ? "btn waves-effect col s12 green " :"btn waves-effect col s12 blue"} 
                     type="submit" >
                       {editi? "Edit Info":"Add Info"} </button>
                       
                        </div>
                        
                </form>
            </div>
        </div>
        )
    }
}
export default Form
