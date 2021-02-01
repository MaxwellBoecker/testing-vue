/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import CurrentWeather from '../../client/components/CurrentWeather.vue';

import mockCurrentWeatherData from '../../mockCurrentWeatherData.json';

let wrapper;

beforeEach(() => {
  // const forecast = [{ temp: 21 }, { temp: 22 }];
  // console.log(mockData.list.length);
  const forecast = mockCurrentWeatherData;

  wrapper = shallowMount(CurrentWeather, {
    propsData: {
      forecast,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('CurrentWeather', () => {
  test('CurrentWeather is a vue instance', () => {
    // expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('Initializes with the correct elements', () => {
    expect(wrapper.findAll('div').length).toEqual(2);
    expect(wrapper.findAll('p').length).toEqual(6);
  });
  test('Check that the correct fields and values for weather data are displayed', () => {
    expect(wrapper.findAll('p').at(0).text()).toMatch('Temperature: 31.23° F');
    expect(wrapper.findAll('p').at(1).text()).toMatch('Feels Like: 16.68° F');
    expect(wrapper.findAll('p').at(2).text()).toMatch('Humidity: 86%');
    expect(wrapper.findAll('p').at(3).text()).toMatch('High: 33.01° F');
    expect(wrapper.findAll('p').at(4).text()).toMatch('Low: 28.99° F');
    expect(wrapper.findAll('p').at(5).text()).toMatch('Description: light snow');
  });
});
