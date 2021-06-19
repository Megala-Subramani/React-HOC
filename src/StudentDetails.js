import React from 'react';
import WithHOC from './withHOC';

const stuDetails = {identity : "stu",data:[{id:1001 , name:"Navtheeb"},{id:1002 , name:"Kanna"},{id:1003 , name:"Mani"},{id:1004 , name:"Poo"}]}

class StudentDetails extends React.Component{
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
            <div className="dv_StudentDetails" onClick={this.props.clickMe} >{this.props.title}</div>
            <table className="tbl_StuDetails" border="1">
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Student Name</th>
                    </tr>
                    {this.getData()}
                </tbody>
            </table>
            </div>)
    }
    
}

export default WithHOC(StudentDetails,stuDetails);