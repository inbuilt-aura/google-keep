import { useState, useRef, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, TextField, ClickAwayListener, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import { IoMdAddCircleOutline } from "react-icons/io";
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: ${props => props.isXs ? '500px' : props.isSm ? '500px' : props.isMd ? '600px' : '370px'};
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`;

const Form = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const note = {
        id: '',
        heading: '',
        text: ''
    }

    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() });

    const { setNotes } = useContext(DataContext);
    
    const containerRef = useRef();

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';
        setAddNote({ ...note, id: uuid() });  // Reset addNote only when a note is added
    }

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px';
    }

    const onTextChange = (e) => {
        setAddNote(prevNote => ({
            ...prevNote,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent form from submitting by default

        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr]);
            setAddNote({ ...note, id: uuid() });  // Reset addNote only when a note is added
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <form onSubmit={handleSubmit}>
                <Container ref={containerRef} isXs={isXs} isSm={isSm} isMd={isMd}>
                    {showTextField && 
                        <TextField 
                            placeholder="Title"
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: 10 }}
                            onChange={onTextChange}
                            name='heading'
                            value={addNote.heading}
                        />
                    }
                    <TextField
                        placeholder="Content..."
                        multiline
                        maxRows={Infinity}
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        onClick={onTextAreaClick}
                        onChange={onTextChange}
                        name='text'
                        value={addNote.text}
                    />
                    {showTextField && 
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit"
                            style={{ marginTop: 10 }}
                            startIcon={<IoMdAddCircleOutline />}
                        >
                            Add Note
                        </Button>
                    }
                </Container>
            </form>
        </ClickAwayListener>
    )
}

export default Form;
