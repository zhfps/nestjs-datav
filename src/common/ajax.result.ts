export class AjaxResult {
    readonly code: number
    readonly message: string
    readonly data: any
    [key: string]: any

    constructor(code, msg, data) {
      this.code = code
      this.message = msg
      this.data = data
    }

    static success(data?: any, message = '操作成功') {
      return new AjaxResult(200, message, data)
    }

    static error(message = '操作失败', code = 500,) {
      return new AjaxResult(code, message, null)
    }
}
