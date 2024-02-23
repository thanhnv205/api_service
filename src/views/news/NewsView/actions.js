import APIs from '@/api/apiService'
import { confirm } from '@/shared/PopupMessage'
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore()

class Actions {
  static async doActive(listId, active) {
    if (listId.length > 0) {
      await APIs.post('v1/posts/active', { listId, active })
      confirm('Thay đổi trạng thái', 'Vui lòng xác nhận!', () => {
        newsStore.doActive(listId, active)
      })
    } else {
      confirm('', 'Vui lòng chọn dữ liệu xử lý')
    }
  }
}

export default Actions
