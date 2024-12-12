import React from "react";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  return (
    <div className="pagination">
      <button onClick={() => changePage("prev")} disabled={currentPage === 1}>
        Önceki
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => changePage("next")}
        disabled={currentPage === totalPages}
      >
        Sonraki
      </button>
    </div>
  );
};

export default Pagination;
