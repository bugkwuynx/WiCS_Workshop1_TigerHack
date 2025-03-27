import { useState } from 'react';
import {Button, TextField, Box} from '@mui/material';

const createBook = ({onCreate}) => {
    // set up state

    // handle create book
    

    // create book form
    return (
        <div style={{ margin: "20px", maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <Box>
                <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)}></TextField>
                <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)}></TextField>
                <TextField label="Cover Image Link" value={cover_url} onChange={(e) => setCoverImage(e.target.value)}></TextField>
            </Box>
            <Button variant="contained" onClick={handleCreateBook}>Create Book</Button>
        </div>
    );
};

export default createBook;