/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import App from '../../client/components/App.vue';
// import mockData from '../../mockData.json';

let wrapper;
const spyRetrieveForecastData = jest.spyOn(App.methods, 'retrieveForecastData');
const spyClearCity = jest.spyOn(App.methods, 'clearCity');
const spyChangeMode = jest.spyOn(App.methods, 'changeMode');

beforeEach(() => {
  // const forecast = [{ temp: 21 }, { temp: 22 }];
  // console.log(mockData.list.length);
  wrapper = shallowMount(App, {
    propsData: {
      forecast: [],
      mode: 'current',
      city: '',
      searchedCity: '',
    },
  });
  // spyRetrieveForecastData = jest.spyOn(App.methods, 'retrieveForecastData');
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
    expect(wrapper.findAll('div').length).toEqual(2);
    expect(wrapper.findAll('button').length).toEqual(3);
    expect(wrapper.findAll('h3').length).toEqual(1);
    expect(wrapper.findAll('input').length).toEqual(1);
  });
  test('Mode is updated in props on button click', () => {
    wrapper.findAll('button').at(1).trigger('click');
    expect(wrapper.vm.mode).toMatch('5-day');
    expect(spyChangeMode).toHaveBeenCalled()
    wrapper.findAll('button').at(0).trigger('click');
    expect(wrapper.vm.mode).toMatch('current');
  });

  test('methods are called on "submit" button click', () => {
    wrapper.findAll('button').at(2).trigger('click');
    expect(spyRetrieveForecastData).toHaveBeenCalled();
    expect(spyClearCity).toHaveBeenCalled();
  });
});
