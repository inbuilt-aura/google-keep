import PropTypes from 'prop-types';
import Form from './notes/Form';
import EmptyNotes from './notes/EmptyNotes';

const MainContentArea = ({ open,drawerWidth }) => {
  const contentStyles = open ? { marginLeft: drawerWidth } : { marginLeft: 0 };

  return (
    <div style={contentStyles}>
      {/* Render Form.jsx, EmptyNotes.jsx, etc. here */}
      <Form />
      <EmptyNotes />
    </div>
  );
};

MainContentArea.propTypes = {
  open: PropTypes.bool.isRequired,
  drawerWidth: PropTypes.number.isRequired,
};

export default MainContentArea;
