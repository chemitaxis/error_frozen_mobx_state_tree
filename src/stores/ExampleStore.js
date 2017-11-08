import { types } from 'mobx-state-tree';

const ExampleStore = types.model('ExampleStore', {
  frozenProp: types.frozen
});

const exampleStore = ExampleStore.create({
  frozenProp: { example: 'hello error!' }
});

export { ExampleStore };
export default exampleStore;
