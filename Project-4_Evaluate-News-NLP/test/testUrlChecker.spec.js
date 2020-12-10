import { checkUrl } from "../src/client/js/urlChecker"

test('url_1 is valid', () => {
  const url_1 = 'http://www.silviafado.com/'
  expect(checkUrl(url_1)).toBe(true)
})

test('url_2 is valid', () => {
  const url_2 = 'https://cmoi.site/en/shop/'
  expect(checkUrl(url_2)).toBe(true)
})

test('url_3 is not valid', () => {
  const url_3 = 'silviafado@gmail.com'
  expect(checkUrl(url_3)).toBe(false)
})

test('url_4 is not valid', () => {
  const url_4 = 'This is simply me!'
  expect(checkUrl(url_4)).toBe(false)
})