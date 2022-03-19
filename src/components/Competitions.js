import React, { useEffect, useState } from 'react';
import Searching from './Searching';
import Paginated from './Paginated';
import ButtonCompetitions from './ButtonCompetitions';
import getCompetitionsList from './getCompetitionsList';
import ButtonLeague from './ButtonLeague';
import CompetitionItems from './CompetitionItems';
import './Competitions.css';

function Competitions({ path }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterList, setFilterList] = useState([]);

  let itemsPerPage;

  useEffect(() => {
    getCompetitionsList(
      path,
      setLoading,
      setData,
    );
  }, [path]);

  useEffect(() => { setCurrentPage(1); }, [path]);

  if (path === 'teams') {
    itemsPerPage = 10;
  } else itemsPerPage = 9;


  return (
    <div>
      <div className="d-flex">
        <Searching
          data={data}
          setCurrentPage={setCurrentPage}
          setFilterList={setFilterList}
        />
        {path === 'competitions'
          ? (
            <div>
              <ButtonLeague
                competitions={filterList}
                setCompetitions={setFilterList}
                setCurrentPage={setCurrentPage}
              />
              <ButtonCompetitions
                competitions={data}
                setCompetitions={setFilterList}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )
          : null}
      </div>
        <CompetitionItems
            page={filterList}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            path={path}
        />
      <Paginated
        perPage={itemsPerPage}
        total={filterList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>

  );
}
export default Competitions;
