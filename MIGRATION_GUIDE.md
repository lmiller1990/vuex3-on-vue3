# Migration Guide Memo

This is going to be Vuex 4 probably, and will not be supporting Vue 2.

## Changes

- Pass store instance as second argument when installing the plugin as `Vue.use(Vuex, store)`, instead of attaching the store as Vue Component option. Following Vue Router impl.
- Removed double installation check on `Vue.use` because current implementation is expecting single global Vue object but it changed in Vue 3. We can bring this back by holding list of multiple Vue app instance and check if the Vuex is installed in those apps if we need.

## Current Progress

- [x] Root State/Getters/Actions/Mutations seems working.
- [x] Module State/Getters/Actions/Mutations seems working.
- [ ] Watch related feature not tested.
- [ ] Subscribe feature not tested.
- [ ] Plugin feature not tested.
- [ ] Not 100% sure how would the API look like on compsition api syntax (with setup()).
