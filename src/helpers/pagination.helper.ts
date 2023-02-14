type PaginationT = {
    offset: number,
    limit: number
}

export const generateOffset = (page: number, perPage: number): PaginationT => {

    const limit = perPage && perPage > 0 ? +perPage : 10;
    return {
        offset: ((page && page > 0 ? +page : 1) - 1) * limit,
        limit
    }
}

