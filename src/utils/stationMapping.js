import station from '@/static/stations'

export default (key) => {
  const title = station.find((item) => item.name === key)?.img ?? ''

  return title
}
