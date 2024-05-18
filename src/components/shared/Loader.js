import React from 'react'
import{CirclesWithBar} from"react-loader-spinner"
function Loader() {
  return (
  
    (<CirclesWithBar
      height="100"
      width="100"
      color="purple"
      outerCircleColor="purple"
      innerCircleColor="purple"
      barColor="purple"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />)
  )
}

export default Loader