import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { FaPalette } from "react-icons/fa";

// Define your styles
const ColorIconButton = styled(IconButton)(({ color }) => ({
  width: "50px",
  height: "50px",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "lightgray", // replace 'lightgray' with any color you prefer
    color: color,
  },
}));

const ColorPalette = ({ onColorChange }) => {
  const colors = ["green", "yellow", "blue", "red"];

  return (
    <div>
    {colors.map((color) => (
      <ColorIconButton key={color} style={{ color }} onClick={() => onColorChange(color)}>
        <FaPalette />
      </ColorIconButton>
    ))}
  </div>
);
};

ColorPalette.propTypes = {
  onColorChange: PropTypes.func.isRequired,
};

export default ColorPalette;
