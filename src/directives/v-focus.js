const focus = {
  install(Vue) {
    Vue.directive('focusFirst', {
      inserted(el, binding, vnode) {
        if (binding.value === false) {
          return;
        }
        const firstInput = vnode.elm.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      }
    });

    Vue.directive('focusNextOnEnter', {
      inserted(el, binding, vnode) {
        let index = 0;
        el.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            const inputs = vnode.elm.querySelectorAll('input, textarea');
            for (let ii = 0; ii < inputs.length; ++ii) {
              if (inputs[ii] === e.target) {
                index = ii + 1;
                break;
              }
            }
            if (inputs.length > index) {
              e.preventDefault();
              inputs[index].focus();
            }
          }
        });
      }
    });
  }
};

export default focus;
