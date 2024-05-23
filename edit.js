// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import users from "./users";
// import { Link, useNavigate } from "react-router-dom";


// function Edit() {

//     const [name, setName] = useState("");
//     const [author, setAuthor] = useState("");
//     const [bookId, setBookId] = useState("");
//     const [releaseDate, setReleaseDate] = useState("");
//     const [id, setid] = useState("");

//     let index = users.map(function (e){
//         return e.id;
//     }).indexOf(id);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name === "" || author === "" || bookId === "" || releaseDate === "") {
//             alert("Invalid input");
//             return;
//         }
        
// let a= users[index];
//          a.name = name,
//          b.author = author,
//          c.bookid = bookId,
//          d.releaseDate = releaseDate;

        

//         users.push({
//             id: uni,
//             bookname: a,
//             bookauthor: b,
//             bookid: c,
//             date: d
//         });

//         navigate('/');
//     };

   
//     useEffect(() => {
//         setName(localStorage.getItem("bookname"))
//         setAuthor(localStorage.getItem("bookauthor"))
//         setBookId(localStorage.getItem("bookid"))
//         setReleaseDate(localStorage.getItem("date"))
//         setid(localStorage.getItem("id"))


//     })

//     return (
//         <div>
//             <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="bookname">
//                     <Form.Control
//                     value = {name}
//                         onChange={(e) => setName(e.target.value)}
//                         type="text"
//                         placeholder="Enter Book Name"
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="bookauthor">
//                     <Form.Control
//                     value = {author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                         type="text"
//                         placeholder="Enter Book Author"
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="bookid">
//                     <Form.Control
//                     value = {bookId}
//                         onChange={(e) => setBookId(e.target.value)}
//                         type="text"
//                         placeholder="Enter Book ID"
//                         required
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="releaseDate">
//                     <Form.Control
//                     value = {releaseDate}
//                         onChange={(e) => setReleaseDate(e.target.value)}
//                         type="text"
//                         placeholder="Enter Release Date"
//                         required
//                     />
//                 </Form.Group>
//                 <Button variant="success" type="submit">Update</Button>
//                 <Link className="d-grid gap-2" to="/">
//                     <Button variant="info" size="lg">
//                         Home
//                     </Button>
//                 </Link>
//             </Form>
//         </div>
//     );
// }
// export default Edit;
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [bookId, setBookId] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem("bookname") || "");
        setAuthor(localStorage.getItem("bookauthor") || "");
        setBookId(localStorage.getItem("bookid") || "");
        setReleaseDate(localStorage.getItem("date") || "");
        setId(localStorage.getItem("id") || "");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || author === "" || bookId === "" || releaseDate === "") {
            alert("Invalid input");
            return;
        }

        let index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
            users[index] = {
                id,
                bookname: name,
                bookauthor: author,
                bookid: bookId,
                date: releaseDate
            };
        }

        navigate('/');
    };

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="bookname">
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Book Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookauthor">
                    <Form.Control
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        placeholder="Enter Book Author"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookid">
                    <Form.Control
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                        type="text"
                        placeholder="Enter Book ID"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="releaseDate">
                    <Form.Control
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                        type="text"
                        placeholder="Enter Release Date"
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit">Update</Button>
                <Link className="d-grid gap-2" to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;

