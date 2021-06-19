import React from 'react';
import WithHOC from './withHOC';

const cusDetails = {identity : "cus",data:[{id:741 , name:"Microsoft"},{id:742 , name:"Cisco"},{id:743 , name:"Google"},{id:744 , name:"Opera"}]};
class ShoppingDetails extends React.Component{
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
            <div className="dv_Shoppingdetails" onClick={this.props.clickMe} >{this.props.title}</div>
            <table className="tbl_ShopDetails" border="1">
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Customer Name</th>
                    </tr>
                    {this.getData()}
                </tbody>
            </table>
            </div>)
    }
}

export default WithHOC(ShoppingDetails,cusDetails);