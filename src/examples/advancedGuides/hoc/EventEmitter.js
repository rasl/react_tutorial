export const EventEmitter = {
    events: [],
    dispatch: function (event, data) {
        if (!this.events[event]) {
            return;
        }
        this.events[event].forEach(callback => callback(data));
    },
    subscribe: function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    unsubscribe: function (event, callbackSource) {
        // const callbackUid = callback.eventEmitterUid;
        this.events[event] = this.events[event].filter((callback) => {
            return callback.toString() !== callbackSource.toString()
        });
        if (this.events[event].length === 0) {
            delete this.events[event];
        }
    }
}

const EventEmitterUnitTest = {
    run: function () {
        this.dispatchTest();
        this.subscribeTest();
    },

    dispatchTest: function () {
        let data = 'no changes'
        const f = () => {
            data = 'changed'
        };
        EventEmitter.subscribe('example', f);
        EventEmitter.dispatch('example', 'data');
        if (data !== 'changed') {
            throw new Error('EventEmitter.dispatch method does not work');
        }
        EventEmitter.unsubscribe('example', f);
    },

    subscribeTest: function () {
        let data = 'no changes'
        const f = () => {
            data = 'changed'
        };
        EventEmitter.subscribe('example', f);
        if (EventEmitter.events['example'].length !== 1) {
            throw new Error('EventEmitter.subscribe does not set up event["example"]');
        }
        EventEmitter.unsubscribe('example', f);
        if (EventEmitter.events['example'] !== undefined) {
            throw new Error('EventEmitter.subscribe does not remove event["example"]');
        }
        EventEmitter.dispatch('example', 'data');
        if (data !== 'no changes') {
            throw new Error('EventEmitter.dispatch method call on empty event handlers');
        }
    }

}

EventEmitterUnitTest.run();
