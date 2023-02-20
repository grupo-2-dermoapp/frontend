export interface ResponseInterface {
    code: string;
    message: string;
}

export interface PaginatorInterface {
    paginator: {
        page: number,
        pages: number,
        total_data: number,
        prev_num: number,
        next_num: number,
        has_next: boolean,
        has_prev: boolean
    }
 
}