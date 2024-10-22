import React from "react";
import LeftArrow from "../../../../public/assets/icons/LeftArrow";
import Typography from "@/components/common/Typography";
import RightArrow from "../../../../public/assets/icons/RightArrow";
import Button from "@/components/common/Button";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const visiblePageNumbers: (number | string)[] = [];

    if (totalPages > 0) visiblePageNumbers.push(1);

    if (currentPage > 3) {
      visiblePageNumbers.push("...");
    }

    if (currentPage > 1 && currentPage < totalPages) {
      visiblePageNumbers.push(currentPage);
    }

    if (currentPage < totalPages - 2) {
      visiblePageNumbers.push("...");
    }

    if (totalPages > 1) visiblePageNumbers.push(totalPages);

    return (
      <div className="flex flex-row justify-between w-full py-4">
        <div
          onClick={() => handlePageClick(Math.max(currentPage - 1, 1))}
          className="flex flex-row gap-2 cursor-pointer items-center px-2 py-1 border border-black border-opacity-10 rounded-lg"
        >
          <LeftArrow />
          <Typography variant="p" className="font-albertsans" text="Previous" />
        </div>
        <div className="flex space-x-2">
          {visiblePageNumbers.map((number, index) => (
            <Button
              variant="Default"
              key={index}
              onClick={() =>
                typeof number === "number" && handlePageClick(number)
              }
              className={
                number === currentPage
                  ? "font-albertsans bg-[#f0f0f0] py-2 px-5 md:px-4 rounded-xl text-sm font-semibold hover:bg-black hover:text-white hover:text-opacity-100"
                  : "text-black text-opacity-60 font-semibold"
              }
              disabled={typeof number !== "number"}
              text={number}
            />
          ))}
        </div>
        <div
          onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))}
          className="flex flex-row gap-2 cursor-pointer items-center px-2 py-1 border border-black border-opacity-10 rounded-lg"
        >
          <Typography variant="p" className="font-albertsans" text="Next" />
          <RightArrow />
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center space-x-2">{renderPageNumbers()}</div>
  );
};

export default Pagination;
