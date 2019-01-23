
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic , faChevronRight} from '@fortawesome/free-solid-svg-icons'
library.add(faMusic, faChevronRight)
const Icon = ({ icon }) => {
    return <FontAwesomeIcon icon={icon} />
}

export { Icon };

