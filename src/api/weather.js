import request from '@/utils/request'

const api_key = 'CWB-8B9090A3-3B26-425C-AB01-FB7B3499C181'

// 現在天氣觀測報告-局屬有人站
export const getCurrentWXManual = (params) => {
  return request({
    url: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${api_key}`,
    method: 'get',
    params
  })
}
// 現在天氣觀測報告-局屬自動站
export const getCurrentWXAuto = (params) => {
  return request({
    url: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=${api_key}`,
    method: 'get',
    params
  })
}

// 一般天氣預報-今明 36 小時天氣預報
export const getThirtySix = (params) => {
  return request({
    url: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${api_key}`,
    method: 'get',
    params
  })
}

// 臺灣各鄉鎮市區未來2天(逐3小時)
export const getTowDaysPerThreeHours = (params) => {
  return request({
    url: `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=${api_key}`,
    method: 'get',
    params
  })
}
