import { mult, sum } from './01'


test('sum must be correct', () => {
    const c = 3
    const d = 5
    const v = 10


    const result = sum(c, d)
    const result3 = sum(v, d)

    expect(result).toBe(8)
    expect(result3).toBe(15)
})

test('mult must be correct', () => {
    const c = 3
    const d = 5
    const v = 10


    const result = mult(c, d)
    const result3 = mult(v, d)

    expect(result).toBe(15)
    expect(result3).toBe(50)
})