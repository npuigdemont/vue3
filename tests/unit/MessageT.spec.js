

import { mount } from '@vue/test-utils';
import MessageT from '@/components/MessageT.vue';

describe("MessageT.vue", () => {
    it('renders props.msg when passed', ()=>{
        const wrapper = mount(MessageT, {
            props: {
                msg: "hola amics"
            }
        });
        expect(wrapper.text()).toContain('hola amics');
    })
})
