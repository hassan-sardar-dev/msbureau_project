'use client';

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


interface PaginationProps {
    totalPages: number;
    initialPage?: number;
    onPageChange?: (page: number) => void;
}

export function Pagination({
    totalPages,
    initialPage = 1,
    onPageChange,
}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        onPageChange?.(page);
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            {/* Previous Button */}
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="rounded-full"
            >
                <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Page Buttons */}
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                const isActive = currentPage === page;

                return (
                    <Button
                        key={page}
                        variant={isActive ? "default" : "outline"}
                        onClick={() => handlePageChange(page)}
                        className={`w-9 h-9 rounded-full text-sm ${isActive ? "bg-[#338cf1] text-white hover:bg-[#2f7dde]" : ""
                            }`}
                    >
                        {page}
                    </Button>
                );
            })}

            {/* Next Button */}
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="rounded-full"
            >
                <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
    );
}
