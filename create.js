
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [bookId, setBookId] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuidv4();
        let uni = ids.slice(0, 8);
        let a = name,
            b = author,
            c = bookId,
            d = releaseDate;

        if (name === "" || author === "" || bookId === "" || releaseDate === "") {
            alert("Invalid input");
            return;
        }

        users.push({
            id: uni,
            bookname: a,
            bookauthor: b,
            bookid: c,
            date: d
        });

        navigate('/');
    };

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="bookname">
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Book Name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookauthor">
                    <Form.Control
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        placeholder="Enter Book Author"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookid">
                    <Form.Control
                        onChange={(e) => setBookId(e.target.value)}
                        type="text"
                        placeholder="Enter Book ID"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="releaseDate">
                    <Form.Control
                        onChange={(e) => setReleaseDate(e.target.value)}
                        type="text"
                        placeholder="Enter Release Date"
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
                <Link className="d-grid gap-2" to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;
