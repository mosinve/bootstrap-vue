import * as components from './components-extra';
import * as directives from './directives-extra';
import * as plugins from './plugins-extra';

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

const VuePlugin = {
    install: function (Vue) {
        if (!Vue._bootstrap_vue_installed) {
            console.error('BootstrapVue is not installed');
            return;
        }

        if (Vue._bootstrap_vue_extra_installed) {
            return;
        }

        Vue._bootstrap_vue_extra_installed = true;

        // Register components
        for (var component in components) {
            Vue.component(component, components[component]);
        }

        // Register directives
        for (var directive in directives) {
            Vue.directive(directive, directives[directive]);
        }

    // Register plugins
        for (var plugin in plugins) {
            Vue.prototype.plugin = plugins[plugin]
        }
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
}

export default VuePlugin;
