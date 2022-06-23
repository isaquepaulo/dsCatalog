import "./styles.css";
import { ReactComponent as ArrowIcons } from "assets/images/arrow.svg";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

const Pagination = ({ pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
      previousLabel={
        <div className="pagination-arrow-container">
          <ArrowIcons />
        </div>
      }
      nextLabel={
        <div className="pagination-arrow-container">
          <ArrowIcons />
        </div>
      }
    />
  );
};

export default Pagination;
