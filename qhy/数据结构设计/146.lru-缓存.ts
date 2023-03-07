/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
  cap: number
  cache: Map<number, number>

  constructor(capacity: number) {
    this.cap = capacity
    this.cache = new Map<number, number>()
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1

    this.makeRecently(key)

    return this.cache.get(key)!
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
      this.cache.set(key, value)
      return
    }

    if (this.cache.size >= this.cap) {
      const key = this.cache.keys().next().value
      this.cache.delete(key)
    }

    this.cache.set(key, value)
  }

  makeRecently(key: number) {
    const value = this.cache.get(key)!
    this.cache.delete(key)
    this.cache.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
