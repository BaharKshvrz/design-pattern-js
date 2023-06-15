"use strict";
function createCommandStack(state) {
    const stack = [];
    let _state = state;
    return {
        execute(command) {
            const [newState, undoFunction] = command(_state);
            _state = newState;
            stack.push(undoFunction);
            return _state;
        },
        undo() {
            const command = stack.pop();
            if (command) {
                _state = command(_state);
            }
            return _state;
        }
    };
}
const addOne = (state) => [
    state + 1,
    (state) => state - 1,
];
const subtractOne = (state) => [
    state - 1,
    (state) => state + 1,
];
const createSetValue = (value) => {
    return (state) => {
        const _originalState = state;
        return [value, () => _originalState];
    };
};
const cStack = createCommandStack(0);
console.log(cStack.execute(addOne));
console.log(cStack.undo());
console.log(cStack.execute(subtractOne));
console.log(cStack.undo());
const setTo42 = createSetValue(450);
console.log(cStack.execute(setTo42));
console.log(cStack.undo());
