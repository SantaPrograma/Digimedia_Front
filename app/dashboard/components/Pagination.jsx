"use client";

import React from "react";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }) {
    const itemsPerPage = 20;
    const pageCount = Math.ceil(count / itemsPerPage);
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10); // Obtener la página actual

    const onPageChange = ({ selected }) => {
        router.push(`?page=${selected + 1}`);
    };

    return (
        <ReactPaginate
            previousLabel={"← "}
            nextLabel={" →"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            containerClassName="flex gap-2 mt-4"
            pageClassName="px-3 py-1 border rounded"
            activeClassName="bg-blue-500 text-white"
            previousClassName="px-3 py-1 border rounded"
            nextClassName="px-3 py-1 border rounded"
            disabledClassName="opacity-50"
            forcePage={currentPage - 1} // Corregir la página seleccionada (ReactPaginate usa índice base 0)
        />
    );
}
