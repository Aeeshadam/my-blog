import { FC } from "react";
import { PaginationButton, PaginationWrapper, InfoText } from "./style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </PaginationButton>
      <InfoText>
        Page {currentPage} of {totalPages}
      </InfoText>
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};
export default Pagination;
