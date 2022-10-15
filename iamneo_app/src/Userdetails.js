import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import{Button,ButtonToolbar}from 'react-bootstrap';
import {Addusermodal} from './Addusermodal';
import {Editusermodal} from './Editusermodal'


export class Userdetails extends Component{
    constructor(props){
        super(props);
        this.state={dets:[], addModalShow:false, editModalShow:false}
    }
    refreshList(){
        fetch(process.env.REACT_APP_API)
        .then(response=>response.json())
        .then(data=>{
            this.setState({dets:data});
        });

    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }

    deleteUser(uid){
        if(window.confirm('Confirm deletion?')){
            fetch(process.env.REACT_APP_API+'/delete/'+uid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json', 
                    'Content-type':'application/json'}
            })
        }
    } 

    render(){
        const {dets, uid, uname, email,dob, phno, locn, addr, stat, imgname}=this.state;
        let addModalClose = ()=>this.setState({addModalShow:false});
        let editModalClose = ()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>EmailID</th>
                        <th>DOB</th>
                        <th>PhoneNO</th>
                        <th>Location</th>
                        <th>Address</th>
                        <th>UserStatus</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dets.map(det=>
                            <tr key = {det.RandomID}>
                                <td>{det.UserID}</td>
                                <td>{det.Name}</td>
                                <td>{det.EmailID}</td>
                                <td>{det.DOB}</td>
                                <td>{det.PhoneNO}</td>
                                <td>{det.Location}</td>
                                <td>{det.Address}</td>
                                <td>{det.UserStatus}</td>
                                {/*<td>Edit/Delete</td>*/}
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant = "info" size='sm'
                                        onClick={()=>this.setState({editModalShow:true,
                                            uid:det.UserID, uname:det.Name,email:det.EmailID, dob:det.DOB, phno:det.PhoneNO, locn:det.Location, 
                                            addr:det.Address, stat:det.UserStatus, imgname:det.ImageName })}>
                                                Edit
                                        </Button>
                                           <Editusermodal show = {this.state.editModalShow}
                                           onHide = {editModalClose}
                                           uid = {uid}
                                           uname = {uname}
                                           email = {email}
                                           dob = {dob}
                                           phno = {phno}
                                           locn = {locn}
                                           addr = {addr}
                                           stat = {stat}
                                           imgname = {imgname}/>
                                        <Button className="mr-2" variant="danger" size='sm'
                                        onClick={()=>this.deleteUser(det.UserID)}>
                                            Delete
                                        </Button>
                                    </ButtonToolbar>        
                                        </td>
                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary' size='sm'
                    onClick={()=> this.setState({addModalShow:true})}>
                        Add User
                    </Button>
                    <Addusermodal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                                    </ButtonToolbar>
            </div>
        )
    }
}