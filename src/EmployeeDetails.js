import React from 'react';
import WithHOC from './withHOC';

var empDetails = {identity : "emp",data:[{id:101 , name:"Megala"},{id:102 , name:"Zara"},{id:103 , name:"Teena"},{id:104 , name:"Jola"}]};

class EmployeeDetails extends React.Component{
    getData=()=>{
        return this.props.data.map(function(obj,index){
            return <tr key={index}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
            </tr>
        })
    }
    render(){ 
        return (<div>
            <div className="dv_EmpDetails" onClick={this.props.clickMe} >{this.props.title}</div>
            <table className="tbl_EmpDetails" border="1">
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                    </tr>
                    {this.getData()}
                </tbody>
            </table>
            </div>)
    }
}

export default WithHOC(EmployeeDetails,empDetails);