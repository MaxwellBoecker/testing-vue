import { shallowMount } from '@vue/test-utils'
import App from "./App.vue"
let wrapper;

beforeEach(() => {
  const forecast = [{ temp: 21}, {temp:22}];
  wrapper = shallowMount(App, {
    propsData: { forecast }
  });
});

afterEach(() => {
  wrapper.destroy();
});
describe('App', () => {
  test('is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
})