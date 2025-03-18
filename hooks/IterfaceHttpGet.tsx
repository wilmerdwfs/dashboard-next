export interface IterfaceHttpGet<T> {
    data: T | null;
    errors: string | null;
    loading: boolean;
    getData: (url: string, par: Record<string, any>) => Promise<void>;
}