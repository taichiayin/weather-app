# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## API欄位說明

lat 緯度 (座標系統採TWD67)，單位 度
lon 經度 (座標系統採TWD67)，單位 度
lat_wgs84 緯度 (座標系統採WGS84)，單位 度
lon_wgs84 經度 (座標系統採WGS84)，單位 度
locationName 測站名稱
stationId 測站ID
obsTime 觀測資料時間
elementName 中文說明
ELEV 高度，單位 公尺
WDIR 風向，單位 度，一般風向 0 表示無風
WDSD 風速，單位 公尺/秒
TEMP 溫度，單位 攝氏
HUMD 相對濕度，單位 百分比率，此處以實數 0-1.0 記錄
PRES 測站氣壓，單位 百帕
24R 日累積雨量，單位 毫米
H_FX 小時最大陣風風速，單位 公尺/秒
H_XD 小時最大陣風風向，單位 度
H_FXT 小時最大陣風時間，hhmm (小時分鐘)
H_F10 本時最大10分鐘平均風速，單位 公尺/秒
H_10D 本時最大10分鐘平均風向，單位 度
H_F10T 本時最大10分鐘平均風速發生時間，hhmm (小時分鐘)
H_UVI 小時紫外線指數
D_TX 本日最高溫，單位 攝氏
D_TXT 本日最高溫發生時間，hhmm (小時分鐘)
D_TN 本日最低溫，單位 攝氏
D_TNT 本日最低溫發生時間，hhmm (小時分鐘)
D_TS 本日總日照時數，單位 小時
VIS 十分鐘盛行能見度，單位
Weather 十分鐘天氣現象描述
CITY 縣市
CITY_SN 縣市編號
TOWN 鄉鎮
TOWN_SN 鄉鎮編號

T 溫度
Td 露點溫度
RH 相對濕度
Wind 風向風速
AT 體感溫度
CI 舒適度
Wx 天氣現象
PoP 降雨機率 12 小時分段
MaxT 最高溫度
MinT 最低溫度
MaxCI 最高舒適度
MinCI 最低舒適度
MaxAT 最高體感溫度
MinAT 最低體感溫度
UVI 紫外線指數
WeatherDescription 天氣描述
