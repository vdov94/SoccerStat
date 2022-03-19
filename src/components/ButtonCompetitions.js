import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css';

function ButtonCompetitions({
  competitions,
  setCompetitions,
  setCurrentPage,
}) {
  const handleOnClick = () => {
    setCompetitions(competitions);
    setCurrentPage(1);
  };

  return (
    <Button variant="success" onClick={handleOnClick}>
      Показать все лиги
    </Button>
  );
}
export default ButtonCompetitions;