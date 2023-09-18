import wxIcon from '@/static/wxIcon'
import dayjs from 'dayjs'

export default (key, time) => {
  const dif = ['clear', 'mostlyClear', 'clearShowers']
  const hour = dayjs(time).hour()
  const isDay = hour >= 6 && hour <= 18

  if (!wxIcon['wxIcon']) return ''

  const title = wxIcon['wxIcon'].find((item) => item.value === key)?.title ?? ''

  if (dif.includes(title)) {
    if (isDay) return `day-${title}`
    return `night-${title}`
  } else {
    return title
  }
}
