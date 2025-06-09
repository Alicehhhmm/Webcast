import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import htmlSerializer from 'jest-serializer-html'
import { afterEach, expect } from 'vitest'

// @see https://vitest.dev/api/expect.html#expect-addsnapshotserializer
expect.addSnapshotSerializer(htmlSerializer)

afterEach(() => {
    cleanup()
})
