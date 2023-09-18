import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import WxCardSm from '@/components/WxCardSm'
import SvgIcon from '@/components/SvgIcon'
import dayjs from 'dayjs'
import { getTowDaysPerThreeHours } from '@/api/weather'
import { getAqi } from '@/api/airQuality.js'
import wxIconMapping from '@/utils/wxIconMapping.js'
import stationMapping from '@/utils/stationMapping.js'

function Home() {
  const [currentWeather, setCurrentWeather] = useState({
    Wx: null,
    T: null,
    WeatherDescription: null,
    PoP6h: null,
    WS: null,
    AQI: null
  })

  const [today, setToday] = useState([])
  const [location, setLocation] = useState('臺北市')

  //臺灣各鄉鎮市區未來2天(逐3小時) F-D0047=089
  let WxApiForm = {
    format: 'json',
    locationName: '臺北市', //地區名稱 ex: 臺北市、新北市、桃園市
    elementName: ['Wx', 'T', 'WeatherDescription', 'PoP6h', 'WS'].join(','),
    timeFrom: dayjs().format('YYYY-MM-DDTHH:mm:ss')
  }

  const handleLocation = (data) => {
    WxApiForm = {
      ...WxApiForm,
      locationName: data.name
    }
    setLocation(data.name)

    fetchCurrentWeather()
    fetchAqi()
  }

  const fetchCurrentWeather = async () => {
    const { records } = await getTowDaysPerThreeHours(WxApiForm)
    const { locations } = records
    const { location } = locations[0]
    const [Wx, T, WeatherDescription, PoP6h, WS] = location[0].weatherElement
    setCurrentWeather({
      ...currentWeather,
      Wx: Wx.time[0].elementValue[1].value,
      T: T.time[0].elementValue[0].value,
      WeatherDescription: WeatherDescription.time[0].elementValue[0].value,
      PoP6h: PoP6h.time[0].elementValue[0].value,
      WS: WS.time[0].elementValue[0].value
    })

    // today
    const today = []
    for (let i = 0; i < 8; i++) {
      today.push({
        time: T.time[i].dataTime,
        T: T.time[i].elementValue[0].value,
        Wx: Wx.time[i].elementValue[1].value
      })
    }
    setToday(today)
  }

  const fetchAqi = async () => {
    const { records } = await getAqi()
    const aqi = records.filter(
      (record) => record.county === WxApiForm.locationName
    )
    setCurrentWeather((previousInputs) => ({
      ...previousInputs,
      AQI: aqi[0].aqi
    }))
  }

  useEffect(() => {
    fetchCurrentWeather()
    fetchAqi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header onLocation={handleLocation} />
      <section
        style={{
          '--image-url': `url(/src/assets/images/${stationMapping(
            location
          )}.jpg)`
        }}
        className="pt-[80px] pb-[120px] flex flex-col justify-center items-center 
       bg-cover bg-no-repeat bg-center relative bg-[image:var(--image-url)]"
      >
        <div
          className="absolute top-0 w-full h-full object-fill 
            bg-gradient-to-b from-[rgba(0,0,0,.4)] from-90% to-[rgba(255,255,255)]"
        />
        <div className="mt-4 text-2xl font-light text-[rgba(255,255,255,.9)] relative z-10">
          {dayjs().format('dddd D MMMM')}
        </div>
        <div className="mt-4 font-medium text-4xl tracking-tighter text-[rgba(255,255,255,0.8)] relative z-10">
          <SvgIcon
            iconName={wxIconMapping(currentWeather.Wx, dayjs())}
            className="w-20 h-20"
          />
        </div>
        <div className="font-medium text-[96px] font-['Raleway'] text-[rgba(255,255,255,0.9)] drop-shadow-[5px_5px_5px_rgba(0,0,0,0.5)]">
          {currentWeather.T}°
        </div>
      </section>
      <section className="relative flex justify-center items-center">
        <div className="absolute mx-auto flex rounded-full bg-white shadow-xl">
          <div className="py-2 px-6 flex flex-col justify-center items-center">
            <SvgIcon iconName="raining" className="w-14 h-14" />
            <p className="text-2xl font-light">
              {currentWeather.PoP6h}
              <span className="text-lg tracking-tighter">%</span>
            </p>
          </div>
          <div className="py-2 px-6 flex flex-col justify-center items-center">
            <SvgIcon iconName="wind" className="w-14 h-14" />
            <p className="text-2xl font-light">
              {currentWeather.WS}{' '}
              <span className="text-lg tracking-tighter">km/h</span>
            </p>
          </div>
          <div className="py-2 px-6 flex flex-col justify-center items-center">
            <SvgIcon iconName="AQI" className="w-14 h-14" />
            <p className="text-2xl font-light">{currentWeather.AQI}</p>
          </div>
        </div>
      </section>
      {/* today */}
      <section className="mt-14">
        <div className="px-4 text-2xl tracking-tighter">Today</div>
        <div className="px-4 py-1 flex overflow-x-auto scrollbar-hide">
          {today.map((item, i) => (
            <WxCardSm key={i} rowData={item} />
          ))}
        </div>
      </section>
      {/* Weekly
      <section className="mt-6">
        <div className="px-4 text-2xl tracking-tighter">Weekly</div>
        <div className="px-4 py-6 flex overflow-x-auto scrollbar-hide">
          {[...Array(12)].map((_, i) => (
            <WxCardSm key="{i}" />
          ))}
        </div>
      </section> */}
    </>
  )
}

export default Home
