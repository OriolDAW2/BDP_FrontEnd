import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../slices/events/eventSlice";

import "./css/PaginatePlaylist.css";

const PaginationEvents = ({ totalPages, onPageChange }) => {
  const { events = [], page, isLoading=true, error="" } = useSelector((state) => state.events);

  console.log(totalPages);
  const dispatch = useDispatch();

  const handleClick = (e, index) => {
    e.preventDefault();
    dispatch(setPage(index));
    onPageChange(index);
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (page > 1) {
      dispatch(setPage(page - 1));
      console.log(page);
      onPageChange(page - 1);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    console.log(totalPages)
    if (page < totalPages) {
      dispatch(setPage(page + 1));
      console.log(page);
      onPageChange(page + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
          <a href="#!" className="page-link" onClick={(e) => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  const renderData = () => {
    const startIndex = (page - 1) * totalPages;
    const endIndex = startIndex + totalPages;

    return events.slice(startIndex, endIndex).map((item, index) => (
      <div key={index}>{/* Renderizar cada elemento aquí */}</div>
    ));
  };

  useEffect(() => {
    onPageChange(page);
  }, [page, onPageChange]);

  return (
    <>
      {/* Renderizar los elementos de la página actual */}
      {renderData()}
      {/* Renderizar los números de página */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <a href="#!" className="page-link" onClick={(e) => handlePrevClick(e)}>
              &laquo;
            </a>
          </li>
          {renderPageNumbers()}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <a href="#!" className="page-link" onClick={(e) => handleNextClick(e)}>
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginationEvents;
