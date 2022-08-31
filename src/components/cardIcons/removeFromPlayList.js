import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromToWatch = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromToWatch = (e) => {
    e.preventDefault();
    context.removeFromPlayList(movie);
  };
  return (
    <IconButton
      aria-label="remove from playList"
      onClick={handleRemoveFromToWatch}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromToWatch;