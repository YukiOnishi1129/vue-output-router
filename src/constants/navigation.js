/**
 * ベースPATH
 * @type {string}
 */

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 * @type {{TOP: string, CREATE: string, EDIT: string, DETAIL: string}}
 */
export const NAVIGATION_LIST = {
  TOP: `/`,
  DETAIL: `/detail/:id`,
  CREATE: `/create`,
  EDIT: `/edit/:id`
}

/**
 * パス一覧
 * 画面遷移時の使用
 * @type {{TOP: string, CREATE: string, EDIT: string, DETAIL: string}}
 */
export const NAVIGATION_PATH = {
  TOP: `/`,
  DETAIL: `/detail/`,
  CREATE: `/create`,
  EDIT: `/edit/`
}
