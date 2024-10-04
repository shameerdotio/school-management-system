import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination_s: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const styles =
    "text-zinc-300 dark:text-zinc-500 hover:text-zinc-300 hover:dark:text-zinc-500 hover:bg-transparent cursor-not-allowed";
  const activeStyles =
    "bg-primary text-white hover:bg-primary dark:text-black text-black";

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={() => handlePageClick(i)}
              className={clsx(
                currentPage === i ? activeStyles : "",
                "px-2 py-1"
              )}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (
        items[items.length - 1] &&
        items[items.length - 1].props.children !== "…"
      ) {
        items.push(
          <PaginationItem key={`ellipsis-${i}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    return items;
  };

  return (
    <Pagination className="py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageClick(currentPage - 1)}
            className={clsx(currentPage === 1 ? styles : "")}
          />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageClick(currentPage + 1)}
            className={clsx(currentPage === totalPages ? styles : "")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pagination_s;
