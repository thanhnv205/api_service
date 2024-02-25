import APIs from '@/api/apiService'
import { confirm } from '@/shared/PopupMessage'
import { useCategoryNewStore } from '@/stores/categoryNewStore'

const categoryNews = useCategoryNewStore()

class actions {
  static async doGetData(params) {
    try {
      categoryNews.loading = true
      setTimeout(async () => {
        const { data } = await APIs.get("v1/category-posts", params);
        categoryNews.setApiData(data)
      }, 200)
    } catch (error) {
      console.error(error);
      categoryNews.loading = false

    }
  }

  static doSelectedRows(payload) {
    categoryNews.setSelectedRows(payload)
  }

  static async doActive(listId, active) {
    if (listId.length > 0) {
      // await APIs.post('v1/category-posts/active', { listId, active })
      confirm('Thay đổi trạng thái', 'Vui lòng xác nhận!', () => {
        categoryNews.setActive(listId, active)
      })
    } else {
      confirm('', 'Vui lòng chọn dữ liệu xử lý')
    }
  }

  static async doDelete(listId) {
    if (listId.length > 0) {
      await APIs.delete('v1/posts/:_id', listId)
      confirm('Xóa bài viết', 'Vui lòng xác nhận!', () => {
        newsStore.doActive(listId, active)
      })
    } else {
      confirm('', 'Vui lòng chọn dữ liệu xử lý')
    }
  }
}

export default actions
