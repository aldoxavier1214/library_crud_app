import React from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { Link, useNavigate} from  "react-router-dom";

function Home() {

    let history = useNavigate();
    function setID(id, bookname, bookauthor, bookid, date){
        
        localStorage.setItem("id",id);
        localStorage.setItem("bookname",bookname);
        localStorage.setItem("bookauthor",bookauthor);
        localStorage.setItem("bookid",bookid);
        localStorage.setItem("date",date);

    }
    function deleted(id){
        let index = users.map(function (e){
            return e.id;
        }).indexOf(id);
        users.splice(index,1);
        history("/")
            
    }


    return(
        <div style={{}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th> bookname</th>
                    <th> bookauthor</th>
                    <th> bookid</th>
                    <th> date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => {
                            return (
                            <tr>
                                <td>{item.bookname}</td>
                                <td>{item.bookauthor}</td>
                                <td>{item.bookid}</td>
                                <td>{item.date}</td>
                                <td>
                                    <Link to={`/edit`}>  
                                        <Button onClick={(e) => setID(item.id, item.bookname, item.bookauthor, item.bookid, item.date)}
                                        variant ="primary"
                                        >
                                            UPDATE
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    
                                        <Button onClick={(e) => deleted(item.id)}
                                        variant ="danger"
                                        >
                                            DELETE
                                        </Button>
                                   
                                </td>
                            </tr>
                            )  
                        })
                    }
                </tbody>
            </Table>
            <Link className='d-grid gap-2' style={{"text-decoration":"none"}} to ="/create">
                <Button variant="success" size="lg">
                    Create Record

                </Button>
            </Link>
        </div>
    )
}
export default Home;
