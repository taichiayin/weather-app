// import { ReactComponent as Sunny } from '@/assets/svg/sunny.svg'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import SvgIcon from '@/components/SvgIcon'
import wxIconMapping from '@/utils/wxIconMapping.js'

function WxCardSm(props) {
  return (
    <div className="mr-4 p-2 flex flex-col w-fit justify-center items-center rounded-full shadow-[1px_1px_3px_0px_rgba(0,0,0,.4)]">
      <p className="mb-2">{dayjs(props.rowData.time).format('HH:mm')}</p>
      <SvgIcon iconName={wxIconMapping(props.rowData.Wx, props.rowData.time)} />
      <p className="mt-2">{props.rowData.T}°</p>
    </div>
  )
}

WxCardSm.propTypes = {
  rowData: PropTypes.object
}

export default WxCardSm
