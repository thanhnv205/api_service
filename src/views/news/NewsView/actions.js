import APIs from '@/api/apiService'
import router from '@/router'
import { confirm, warning, success } from '@/shared/PopupMessage'
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore()

class actions {
  static async doGetData(params) {
    try {
      newsStore.loading = true
      setTimeout(async () => {
        const { data } = await APIs.get("v1/posts", params);
        newsStore.setApiData(data);
      }, 200)
    } catch (error) {
      console.error(error);
      newsStore.loading = false
    }
  }

  static doSelectedRows(payload) {
    newsStore.setSelectedRows(payload)
  }

  static doActive(listId, active) {
    if (listId.length > 0) {
      confirm('Thay đổi trạng thái', 'Vui lòng xác nhận!', async () => {
        await APIs.post('v1/posts/active', { listId, active })
        newsStore.setActive(listId, active)
      })
    } else {
      confirm('', 'Vui lòng chọn dữ liệu xử lý')
    }
  }

  static async doGetCreate() {
    try {
      const { data } = await APIs.get("v1/category-posts", { active: true })
      newsStore.setCreateData(data)
    } catch (error) {
      console.log(error);
    }
  }

  static doGetUpdate(params) {
    try {
      newsStore.loading = true
      setTimeout(async () => {
        const [updateData, category] = await Promise.all([
          APIs.get(`v1/posts/${params}`),
          APIs.get("v1/category-posts", { active: true })
        ]).then((response) => response.map(({ data }) => data));

        newsStore.setUpdateData({ updateData, category });
      }, 200)
    } catch (error) {
      console.error(error);
      newsStore.loading = false
    }
  }

  static async doUpdate(params, data) {
    try {
      await APIs.put(`v1/posts/${params}`, data);
      success('Xử lý thành công!', () => {
        router.back();
      })
    } catch (error) {
      console.error(error)
    }
  }

  static doDelete(listId) {
    if (listId.length > 0) {
      confirm('Xóa bài viết', 'Vui lòng xác nhận!', async () => {
        await APIs.post('v1/posts/destroy', { listId })
        newsStore.setDelete(listId)
      })
    } else {
      warning('Cảnh báo!', 'Vui lòng chọn dữ liệu xử lý')
    }
  }
}

export default actions
