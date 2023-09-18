import request from '@/utils/request'

const api_key = 'ca0efd27-2654-432e-acc7-e69061e6a470'

// 空氣品質指標(AQI)
export const getAqi = (params) => {
  return request({
    url: `https://data.moenv.gov.tw/api/v2/aqx_p_432?language=zh&api_key=${api_key}`,
    method: 'get',
    params
  })
}
