import React from 'react';


export default function withHOC(OldComponent,obj){ 
    class newComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data : obj.data
            }
        }
        clickMe=()=>{
            switch(obj.identity){
                case "emp":
                    alert("I AM an Employee");
                    break;
                case "stu":
                    alert("I AM a Student");
                    break;
                case "cus":
                    alert("I AM a Customer");
                    break;
                default:
                    alert("I AM Nothing");
                    break;
            }            
        }
        render(){
            return(<OldComponent {...this.props} data={this.state.data} clickMe={this.clickMe} />)
        }
    }
    return newComponent
}

 