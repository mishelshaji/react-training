export default interface Result<T> {
    success: boolean;
    message: string;
    statusCode: number;
    data: T;
}
