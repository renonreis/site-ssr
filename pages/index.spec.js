import { shallowMount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Page Index', () => {
  test('is a render index page', () => {
    const wrapper = shallowMount(Index);
    expect(wrapper.vm).toBeTruthy();
  });
});
