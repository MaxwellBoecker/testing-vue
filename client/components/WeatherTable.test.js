/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import WeatherTable from './WeatherTable.vue';

let wrapper;

beforeEach(() => {
  // const forecast = [{ temp: 21 }, { temp: 22 }];
  // console.log(mockData.list.length);
  wrapper = shallowMount(WeatherTable, {
    propsData: { forecast: [] },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('WeatherTable', () => {
  test('WeatherTable is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('It initializes with the correct elements', () => {
    expect(wrapper.findAll('table').length).toEqual(1);
    expect(wrapper.findAll('thead').length).toEqual(1);
    expect(wrapper.findAll('tr').length).toEqual(1);

    expect(wrapper.findAll('th').length).toEqual(9);
    expect(wrapper.findAll('th').at(0).text()).toMatch('Datetime');
    expect(wrapper.findAll('th').at(1).text()).toMatch('Temperature');
    expect(wrapper.findAll('th').at(2).text()).toMatch('Humidity');
    expect(wrapper.findAll('th').at(3).text()).toMatch('Pressure');
    expect(wrapper.findAll('th').at(4).text()).toMatch('Clouds');
    expect(wrapper.findAll('th').at(5).text()).toMatch('Wind speed');
    expect(wrapper.findAll('th').at(6).text()).toMatch('Wind degree');
    expect(wrapper.findAll('th').at(7).text()).toMatch('Weather');
    expect(wrapper.findAll('th').at(8).text()).toMatch('Description');
  });
});
