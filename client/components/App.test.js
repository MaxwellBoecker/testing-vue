/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import App from './App.vue';
// import mockData from '../../mockData.json';

let wrapper;

beforeEach(() => {
  // const forecast = [{ temp: 21 }, { temp: 22 }];
  // console.log(mockData.list.length);
  wrapper = shallowMount(App, {
    propsData: { forecast: [] },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('App', () => {
  test('App is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('It initializes with the correct elements', () => {
    expect(wrapper.findAll('h1').length).toEqual(1);
    expect(wrapper.findAll('div').length).toEqual(1);
  });
});
