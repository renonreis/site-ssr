import { mount } from '@vue/test-utils';
import Section from '@/components/Section';

describe('Section', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Section);
    expect(wrapper.vm).toBeTruthy();
  });
});
