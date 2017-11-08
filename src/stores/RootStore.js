import { types, getSnapshot } from 'mobx-state-tree';
import exampleStore, { ExampleStore } from './ExampleStore';

// import ModalStore from './modalStore';

const RootStore = types.model('RootStore', {
  exampleStore: types.optional(ExampleStore, getSnapshot(exampleStore))
});

const rootStore = RootStore.create();

export default rootStore;
