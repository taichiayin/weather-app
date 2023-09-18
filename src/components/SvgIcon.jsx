import { useDynamicSVGImport } from '@/utils/useDynamicSvgImport.js'
import PropTypes from 'prop-types'

function SvgIcon(props) {
  const { iconName, className, svgProp, onClick } = props
  const { loading, SvgIcon } = useDynamicSVGImport(iconName)

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8" />
      )}
      {SvgIcon && (
        <SvgIcon {...svgProp} className={className} onClick={onClick} />
      )}
    </>
  )
}

SvgIcon.propTypes = {
  iconName: PropTypes.string,
  svgProp: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default SvgIcon
