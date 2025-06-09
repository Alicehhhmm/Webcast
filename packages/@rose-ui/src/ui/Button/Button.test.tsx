import * as React from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
    it('renders default button with text', () => {
        render(<Button>Click Me</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Click Me')
    })

    it('applies variant and size correctly', () => {
        render(
            <Button variant="outline" size="sm">
                Test
            </Button>,
        )
        const btn = screen.getByRole('button')
        expect(btn.className).toMatch(/border/)
        expect(btn.className).toMatch(/h-8/)
    })

    it('renders as a child element with Slot', () => {
        render(
            <Button asChild>
                <a href="/">Link</a>
            </Button>,
        )
        expect(screen.getByRole('link')).toHaveAttribute('href', '/')
    })
})
