import PropTypes from 'prop-types'
import { useState } from 'react'

const Increment = function(props) {

    const {inc} = props;

    const [nb, setNb] = useState(0)

    const resetButtonVisible = !(nb === 0)

    const incrementValue = () => {
        setNb(previousValue => previousValue + inc)
    }

    const resetValue = () => {
        setNb(0)
    }

    return(
        <>
            <h1>{nb}</h1>
            <button onClick={incrementValue}>Add</button>
            {(resetButtonVisible) 
                ? <button onClick={resetValue}>Reset</button>
                : <span></span>
            }
        </>
    )
}

Increment.propTypes = {
    inc: PropTypes.number
}

Increment.defaultProps = {
    inc : 1
}

export default Increment;