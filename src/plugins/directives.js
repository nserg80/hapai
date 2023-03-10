export const outsideClick = {
  mounted(el, binding) {
    const handleClick = (e) => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value();
      }
    };
    el.__clickOutside__ = handleClick;
    document.addEventListener("click", handleClick);
  },
  beforeUnmount(el) {
    document.removeEventListener("click", el.__clickOutside__);
    delete el.__clickOutside__;
  }
}

export const focus = {
  mounted(el) {
    el.focus();
  }
}
