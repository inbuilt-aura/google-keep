import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setAcrchiveNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setAcrchiveNotes,
            deleteNotes,
            setDeleteNotes
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DataProvider;
