import { mount } from '@vue/test-utils';
import NavN from '@/components/NavN.vue';


//existeix perquè li diem que canvii a true
describe("NavN.vue", () => {
    it('renders a profile link', ()=>{
        const wrapper = mount(NavN, {
            data(){
                return {
                    isLoggedIn: true,
                }
            }
        });
        const profileLink = wrapper.get("#profile");
        expect(profileLink.text()).toEqual('My profile');
    });
    it('should not render a profile link', () => {
        const wrapper = mount(NavN, {
            data(){
                return {
                    isLoggedIn: false,
                }
            }
        });
       
        const profileLink = wrapper.find("#profile");
        expect(profileLink.exists()).toBe(false);
    });
})
