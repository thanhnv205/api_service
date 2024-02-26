import { error } from './PopupMessage'

const DEFAULT_MESSAGE_ERROR = 'Something went wrong!'

class Errors extends Error {
  constructor(apiError) {
    const { response } = apiError
    const message = response?.data?.message || DEFAULT_MESSAGE_ERROR
    super(message)
    this.codeError = response?.data?.statusCode || 500

    error(`Lỗi ${this.codeError}`, message)
  }
}

export default Errors