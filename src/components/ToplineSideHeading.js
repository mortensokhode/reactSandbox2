import React from 'react'
import { TOPLINE_TEXT_OBJ } from '../constantExports/globalConstants'
import BloodSucker from '../grphcComponents/BloodSucker'

function ToplineSideHeading(props) {
  return (
    <div className={`${props.headingSide}Heading`}>   {/* needs className for going left or right */}
       {(props.headingType === "textHeading") ? (
                  <h2>{TOPLINE_TEXT_OBJ.textHeading}</h2>) : (
                  <>
                    <BloodSucker showIcon={true} />
                    <p className='smallSpan'>{TOPLINE_TEXT_OBJ.iconHeading}</p>
                  </>
              )
        }
    </div>
  )
}

export default ToplineSideHeading