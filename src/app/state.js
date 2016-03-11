const state = {};
const watchers = [];

export function setState(k, v) {
  state[k] = v;

  watchers.forEach((c) => {
    c(state);
  });
}

export function stateUpdated(c) {
  watchers.push(c);
}
