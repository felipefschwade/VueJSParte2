import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {
        let current = 0;
        el.addEventListener('dblclick', function() {
            let incremento = 90;
            let animacao = true;

            if(binding.value) {
                animacao = binding.value.animate;
                incremento = binding.value.incremento;
            }
            current+=incremento;
            this.style.transform = `rotate(${current}deg)`;
            if (animacao) this.style.transition = "transform 0.5s" ;
        });
    }
});