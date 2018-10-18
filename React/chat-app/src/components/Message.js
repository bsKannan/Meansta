import React from "react"
import PropTypes from "prop-types"

var Message = ({ message, author }) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)

Message.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes
}

export default Message