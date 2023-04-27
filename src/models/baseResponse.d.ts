/**
 * 响应参数
 */
export interface BaseResponse<T> {
    code: number
    data: T
    message: string
    description: string
}
