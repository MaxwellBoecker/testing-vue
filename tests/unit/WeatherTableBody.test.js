/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils';
import WeatherTableBody from '../../client/components/WeatherTableBody.vue';
import mockData from '../../mockData.json';

let wrapper;

beforeEach(() => {
  // const forecast = [{ temp: 21 }, { temp: 22 }];
  // console.log(mockData.list.length);
  wrapper = shallowMount(WeatherTableBody, {
    propsData: { forecast: [] },
    sync: false,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('WeatherTableBody', () => {
  test('WeatherTableBody is a vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('It initializes with the correct elements', () => {
    expect(wrapper.findAll('tbody').length).toEqual(1);
    expect(wrapper.findAll('tr').length).toEqual(0);
  });

  test('Processes valid props data', async () => {
    // check that the prop data is stored as expected within the component
    wrapper.setProps({
      forecast: mockData.list,
    });
    expect(wrapper.vm.forecast.length).toEqual(40);
    // check that the elements are rendered as expected to the DOM
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('tr').length).toEqual(40);
    expect(wrapper.findAll('td').length).toEqual(360);
    // expect(wrapper.findAll('td').length).toEqual(40);
  });
});
