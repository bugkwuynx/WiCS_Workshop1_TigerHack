import { useState, useEffect } from "react";
import CreateBook from "./createBook";
import {Card, CardContent, Typography, CardActions, Button} from "@mui/material";

const DisplayBook = () => {

    // fetch books
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_PORT}/api/books`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                const result = await response.json();
                const res = Array.isArray(result.data) ? result.data : [result.data];
                setBooks(res);
                return true;
            } catch (error) {
                console.error("Error fetching books:", error);
                return false;
            }
        }
        fetchBooks();
    }, []);


    // handleCreate


    return (
        <>
            {/* create book form */}
            
            {/* display books */}
            <div style={{ margin: "20px", maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
                {/* Display books */}
                {books.map((book, index) => (
                    <Card key={book._id || index}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book.status}
                        </Typography>


                        <img src={book.cover_url} width={100} height={100}/>
                    </CardContent>
                  </Card>
                ))}
            </div>
        </>
    );
    
}

export default DisplayBook;