import { reducer, TOOGLE_COLLAPSED } from "./accordionReducer"

test('test_accordion_reducer', () => {
    //data
    const state = {
        collapsed: true
    }
    const action = {
        type: TOOGLE_COLLAPSED
    }

    //action
    const newState = reducer(state, action)

    //expection

    expect(newState.collapsed).toBe(false)

})

test('test_accordion_reducer', () => {
    //data
    const state = {
        collapsed: false
    }
    const action = {
        type: TOOGLE_COLLAPSED
    }

    //action
    const newState = reducer(state, action)

    //expection

    expect(newState.collapsed).toBe(true)

})

test('test_accordion_reducer', () => {
    //data
    const state = {
        collapsed: false
    }
    const action = {
        type: 'DSKJLAKJSD'
    }

    //action


    //expection

    expect(() => {
        reducer(state, action)
    }).toThrow()

})
