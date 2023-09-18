import { useState } from 'react'
import PropTypes from 'prop-types'
import stations from '@/static/stations.js'
import SvgIcon from '@/components/SvgIcon'
// import { ReactComponent as Burger } from '@/assets/svg/burger.svg'
// import { ReactComponent as Gear } from '@/assets/svg/gear.svg'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'

function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [location, setLocation] = useState('臺北市')

  const onLocationClick = (station) => {
    props.onLocation(station)
    setLocation(station.name)
    onClose()
  }

  return (
    <>
      <div className="w-full p-4 flex justify-center items-center text-[128px] absolute top-0 left-0 z-10">
        <SvgIcon
          iconName="burger"
          className="w-8 h-8 mr-auto fill-{rgba(255,255,255,.5)} fill-white"
          onClick={onOpen}
        />
        <div className="text-4xl tracking-wider font-['Raleway'] text-[rgba(255,255,255,0.9)]">
          {location}
        </div>
        <SvgIcon iconName="gear" className="w-8 h-8 ml-auto fill-white" />
      </div>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bgColor="rgba(220,220,220,.9)">
          <DrawerHeader borderBottomWidth="1px">縣市</DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col">
              {stations.map((station) => (
                <button
                  className="mb-2 p-2 bg-white rounded-full shadow-lg"
                  key={station.name}
                  onClick={() => onLocationClick(station)}
                >
                  {station.name}
                </button>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

Header.propTypes = {
  onLocation: PropTypes.func
}

export default Header
