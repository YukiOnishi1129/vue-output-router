import { describe, it, expect, beforeEach } from 'vitest'
import { useTodoProvider } from './useTodoProvider'

describe('useTodoProvider', () => {
  let todoProvider

  beforeEach(() => {
    todoProvider = useTodoProvider()
  })

  describe('showTodoList', () => {
    it('検索キーワードが空の場合、全てのTodoを返す', () => {
      todoProvider.searchKeyword.value = ''
      expect(todoProvider.showTodoList.value.length).toBe(2) // INIT_TODO_LISTの初期値による
    })

    it('検索キーワードに一致するTodoのみを返す', () => {
      todoProvider.searchKeyword.value = 'Todo1'
      expect(todoProvider.showTodoList.value.length).toBe(1)
      expect(todoProvider.showTodoList.value[0].title).toContain('Todo1')
    })
  })

  describe('handleAddTodo', () => {
    it('Enterキーで新しいTodoを追加できる', () => {
      todoProvider.addInputValue.value = '新しいタスク'
      todoProvider.handleAddTodo({ key: 'Enter' })

      const lastTodo = todoProvider.showTodoList.value[todoProvider.showTodoList.value.length - 1]
      expect(lastTodo.title).toBe('新しいタスク')
      expect(todoProvider.addInputValue.value).toBe('') // 入力値がリセットされる
    })

    it('空文字の場合は追加されない', () => {
      const initialLength = todoProvider.showTodoList.value.length
      todoProvider.addInputValue.value = '   '
      todoProvider.handleAddTodo({ key: 'Enter' })

      expect(todoProvider.showTodoList.value.length).toBe(initialLength)
    })
  })

  describe('handleDeleteTodo', () => {
    it('確認後にTodoを削除できる', () => {
      // window.confirmをモック化
      const originalConfirm = window.confirm
      window.confirm = () => true

      const initialLength = todoProvider.showTodoList.value.length
      const targetTodo = todoProvider.showTodoList.value[0]

      todoProvider.handleDeleteTodo(targetTodo.id, targetTodo.title)
      expect(todoProvider.showTodoList.value.length).toBe(initialLength - 1)

      // モックを元に戻す
      window.confirm = originalConfirm
    })

    it('確認をキャンセルした場合、Todoは削除されない', () => {
      // window.confirmをモック化
      const originalConfirm = window.confirm
      window.confirm = () => false

      const initialLength = todoProvider.showTodoList.value.length
      const targetTodo = todoProvider.showTodoList.value[0]

      todoProvider.handleDeleteTodo(targetTodo.id, targetTodo.title)
      expect(todoProvider.showTodoList.value.length).toBe(initialLength)

      // モックを元に戻す
      window.confirm = originalConfirm
    })
  })
})
