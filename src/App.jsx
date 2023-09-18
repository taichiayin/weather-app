import './App.css'
import Home from './pages/Home'
// import { ReactComponent as DayCloudyIcon } from '@/assets/svg/day-cloudy.svg'
// import { ReactComponent as AirFlow } from '@/assets/svg/airFlow.svg'
// import { ReactComponent as RainIcon } from '@/assets/svg/rain.svg'
// import { ReactComponent as Refresh } from '@/assets/svg/refresh.svg'
// import dayjs from 'dayjs'
// import { useEffect, useState } from 'react'
// import { getCurrentWX } from '@/api/weather.js'

// const Authorization = 'CWB-8B9090A3-3B26-425C-AB01-FB7B3499C181'

function App() {
  // const [theme, setTheme] = useState('')
  // const [currentWeather, setCurrentWeather] = useState({
  //   CITY: '臺北市',
  //   TOWN: '中正區',
  //   Weather: '多雲時晴',
  //   TEMP: 1.1,
  //   WDSD: 22.9,
  //   // rainPossibility: 48.3,
  //   obsTime: '2020-12-12 22:10:00'
  // })

  // const toggleTheme = () => {
  //   document.documentElement.classList.toggle('dark')
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }

  // array convert to object
  // const handleWX = (data) => {
  //   const obj = {}
  //   data.forEach((item) => {
  //     obj[item.elementName] = item.elementValue
  //   })
  //   return obj
  // }

  // const handleLoc = (data) => {
  //   const obj = {}
  //   data.forEach((item) => {
  //     obj[item.parameterName] = item.parameterValue
  //   })
  //   return obj
  // }

  // const fetchCurrentWeather = async () => {
  // const { records } = await getCurrentWX()
  // const { parameter, weatherElement, time } = records.location[0]
  // setCurrentWeather({
  //   ...handleLoc(parameter),
  //   ...handleWX(weatherElement),
  //   obsTime: time.obsTime
  // })
  // }

  // useEffect(() => {
  //   fetchCurrentWeather()
  // }, [])

  return (
    // <div className="w-ful bg-gradient-to-b from-blue-500 via-cyan-500 via-40% to-transparent 50%">
    <div className="w-ful">
      <Home />
    </div>
  )
}

export default App
