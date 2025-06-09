import { createElement, forwardRef, SVGProps } from 'react'

import defaultAttributes from './defaultAttributes'

const createRoseIcon = () => {
    const comp = forwardRef((props: SVGProps<SVGSVGElement>, ref) => {
        return createElement('svg', {
            ...defaultAttributes,
            ...props,
            ref,
        })
    })

    comp.displayName = ''

    return comp
}

export default createRoseIcon
