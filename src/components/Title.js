import React from 'react';
import PropTypes from 'prop-types';
function Title({ titleInfo })
{
    const { text} = titleInfo;
    return(
        <h1 className='title'>{text}</h1>
    )
}
export default Title;