import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import{Button,ButtonToolbar}from 'react-bootstrap';
import {Addusermodal} from './Addusermodal';
import {Editusermodal} from './Editusermodal'


export class Userdetails extends Component{
    constructor(props){
        super(props);
        this.state={dets:[], addModalShow:false, editModalShow:false,
            UseridFilter:"", NameFilter:"", WithoutFilter:[]
        }
    }
    FilterFunc(){
        var UseridFilter = this.state.UseridFilter;
        var NameFilter = this.state.NameFilter;
        var FilteredData = this.state.WithoutFilter.filter(
            function(e){
                return e.UserID.toString().toLowerCase().includes(
                    UseridFilter.toString().trim().toLowerCase()
                )&&
                e.Name.toString().toLowerCase().includes(
                    NameFilter.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({dets:FilteredData});
    }

    sortResult(property, bol){
        var sorted_data = this.state.WithoutFilter.sort(function(a,b){
            if(bol){
                return (a[property]>b[property])?1:((a[property]<b[property])?-1:0);
            }
            else{
                return (b[property]>a[property])?1:((b[property]<a[property])?-1:0);
            }
        });
        this.setState({dets:sorted_data});
    }
    hangeUseridFilter = (e)=>{
        this.state.UseridFilter=e.target.value;
        this.FilterFn();
    }
    changeNameFilter = (e)=>{
        this.state.NameFilter=e.target.value;
        this.FilterFunc();
    }
    refreshList(){
        fetch(process.env.REACT_APP_API)
        .then(response=>response.json())
        .then(data=>{
        this.setState({WithoutFilter:data/*data,dets:data*/});
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
                <ButtonToolbar>
                    <Button variant='light' size='sm'
                    onClick={()=> this.setState({addModalShow:true})}>
                        Add User
                    </Button>
                    <Addusermodal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                <Button variant="primary" type="button" className="btn btn-light" size = "sm"
            onClick={()=>this.sortResult('UserID',true)}>
                {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
        </svg>*/}
        Show Users
        </Button>
                <input className="form-control m-2"
                    onChange={this.changeNameFilter}
                    placeholder="Filter by Name"/>

<button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('UserID',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
        </svg>
            </button>
            
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('UserID',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
            </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>
                                UserID
                                </th>
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
                                        <Button className="btn btn-green mr-1" type = "button" variant = "info" size='sm'
                                        onClick={()=>this.setState({editModalShow:true,
                                            uid:det.UserID, uname:det.Name,email:det.EmailID, dob:det.DOB, phno:det.PhoneNO, locn:det.Location, 
                                            addr:det.Address, stat:det.UserStatus, imgname:det.ImageName })}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
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
                                        <Button type = "button" className="btn btn-red mr-1" variant="danger" size='sm'
                                        onClick={()=>this.deleteUser(det.UserID)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                                        </Button>
                                    </ButtonToolbar>        
                                        </td>
                            </tr>)}
                    </tbody>
                </Table>
                {/*<ButtonToolbar>
                    <Button variant='primary' size='sm'
                    onClick={()=> this.setState({addModalShow:true})}>
                        Add User
                    </Button>
                    <Addusermodal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                                        </ButtonToolbar>*/}
            </div>
        )
    }
}