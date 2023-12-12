import { useContext, useState } from "react";
import "./pagination.sass";
import Card from "../Card/Card";
import TiresContext from "../..";
import { TiresContextData } from "../..";


const Pagination = () => {
  //@ts-ignore
  const { filteredCards } = useContext<TiresContextData>(TiresContext) || { filteredCards: [] };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const pagesCount = Math.ceil(filteredCards.length / itemsPerPage);

  const handleClick = (currentPage:number) => {
    setCurrentPage(currentPage);
  };

  const currentItems = filteredCards.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pageButtons = [];
  for (let i = 0; i < pagesCount; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handleClick(i)}
        className={currentPage === i ? "active" : ""}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div>
      <Card currentItems={currentItems} />
      <div className="container-pagination">
        <div className="pagination">
          <button
            className="prev"
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          {pageButtons}
          <button
            className="next"
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === pagesCount - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
