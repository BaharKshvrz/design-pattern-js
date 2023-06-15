"use strict";
class Command {
}
class CommandStack {
    constructor(_state) {
        this._state = _state;
        this.stack = [];
    }
    get state() {
        return this._state;
    }
    execute(command) {
        this._state = command.execute(this._state);
        this.stack.push(command);
    }
    undo() {
        const command = this.stack.pop();
        if (command) {
            this._state = command.undo(this._state);
        }
    }
}
class AddOne extends Command {
    execute(state) {
        return state + 1;
    }
    undo(state) {
        return state - 1;
    }
}
class SubtractOne extends Command {
    execute(state) {
        return state - 1;
    }
    undo(state) {
        return state + 1;
    }
}
class SetValue extends Command {
    constructor(value) {
        super();
        this.value = value;
    }
    execute(state) {
        this._originalValue = state;
        return this.value;
    }
    undo(state) {
        return this._originalValue;
    }
}
const cs = new CommandStack(0);
console.log(cs.state);
cs.execute(new AddOne());
console.log(cs.state);
cs.undo();
console.log(cs.state);
cs.execute(new SubtractOne());
console.log(cs.state);
cs.execute(new SetValue(45));
console.log(cs.state);
cs.undo();
console.log(cs.state);
