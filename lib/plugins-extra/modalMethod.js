import Vue from 'vue';
import bModal from '../../lib/components/modal.vue';


const modal = function() {
    const el = this.$root.$el;
    const modal = new Vue({
        components:{
            bModal
        },
        parent: this.$root,
        el: el,
        render(h){
            return h('b-modal')
        }
    });
};

export default {modal}
