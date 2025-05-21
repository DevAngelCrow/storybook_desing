export interface TableProps<T> {
    headers: TableHeader<T>[];
    items: T[];
    loading?: boolean;
    emptyMessage?: string;
}

export interface TableHeader<T> {
    key: keyof T;
    label: string;
    sortable?: boolean;
    width?: string;
    align?: "left" | "rigth" | "center";
}

