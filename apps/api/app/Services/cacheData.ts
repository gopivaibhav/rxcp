import { ResponseContract } from '@ioc:Adonis/Core/Response'
import Redis from '@ioc:Adonis/Addons/Redis'

function cacheData(key: string, duration: number = 86400) {
  return (response: ResponseContract) => {
    return async (cb: Function) => {
      let data = {}
      let usersCache = await Redis.get(key)
      if (!usersCache) {
        const results = await cb()
        data = results.serialize()
        await Redis.set(key, JSON.stringify(data), 'EX', duration)
      } else {
        data = JSON.parse(usersCache)
      }

      response.header('x-cache-duration', duration)
      response.header('x-cache-in', 'seconds')

      return data
    }
  }
}

export default cacheData
