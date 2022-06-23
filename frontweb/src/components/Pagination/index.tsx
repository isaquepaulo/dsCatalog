import "./styles.css";
import { ReactComponent as ArrowIcons } from "assets/images/arrow.svg";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
  
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-item"
        breakClassName="pagination-item"
        previousClassName="arrow-previous"
        nextClassName="arrow-next"
        activeLinkClassName="pagination-link-active"
        disabledClassName="arrow-inactive"
        previousLabel={<ArrowIcons />}
        nextLabel={<ArrowIcons />}
      />
     
  );
};

export default Pagination;
