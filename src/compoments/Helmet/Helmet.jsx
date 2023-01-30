<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title =  props.title + ' | Quản Trị ADMIN'

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

=======
import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title =  props.title + ' | Quản Trị ADMIN'

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

>>>>>>> fcbc12e (update func)
export default Helmet