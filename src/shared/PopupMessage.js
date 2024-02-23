import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue'

export const confirm = (title, content, func) => {
  Modal.confirm({
    title,
    icon: createVNode(ExclamationCircleOutlined),
    content,
    okText: 'Xác nhận',
    cancelText: 'Đóng',
    onOk: () => {
      func()
    },
    onCancel: () => {}
  })
}