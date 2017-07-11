import Vue from 'vue';
import bModal from '../../lib/components/modal.vue'

const modal = function() {
    const el = this.$root.$el;
    const modal = new Vue({
        el: el,
        render(h){
            return (
                <bModal></bModal>
            )
        }
    });
};

export default {modal}