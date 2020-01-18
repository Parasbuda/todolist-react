import React, { Component } from 'react';
import Form from "./Component/form"
import Todolist from "./Component/todolist"

class App extends Component {
 state={
   items:[],
   id:0,
   item:'',
   itemedit:false
 }
 handlechange=(e)=>{
   this.setState({
     item:e.target.value
   })
  }
   
    handlesubmit=(e)=>{
     e.preventDefault()
     
        const newitem=
        {
       id:this.state.id,
       item:this.state.item
        }
       const updatelist=[...this.state.items,newitem]
       this.setState({
         items:updatelist,
         item:'',
         id:Math.random(),
         itemedit:false
        })  
        
      }
    
        clear=()=>{
          this.setState({
            items:[]
          })
        } 
            handleDelete=(id)=>{
            const filtered=this.state.items.filter(filer=>{
              return (
              filer.id!==id)
                 })
               this.setState({
               items:filtered
                })
            }
              handleEdit=(id)=>{
              const filtered=this.state.items.filter(filer=>{
               return (
               filer.id!==id)
                })
               const selecteditem=this.state.items.find(item=>
               item.id===id)
               this.setState({
                 items:filtered,
                 item:selecteditem.item, 
                 itemedit:true,
                  id:id
                })
              }
              
            
  
 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4 className="center red-text">ToDo App</h4>
          <Form input={this.state.item}
           change={this.handlechange} 
           sub={this.handlesubmit}
           editi={this.state.itemedit}
          
          />
          <Todolist item={this.state.items} 
          clear={this.clear}
          remove={this.handleDelete}
          edit={this.handleEdit}
          />
          </div>
        </div>
      </div>

     
    );
  }
}

export default App;
