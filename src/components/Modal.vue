<template lang="pug">
  transition(name= "slide")
    .modal.modal-mask
      .modal-dialog(role="document")
        .modal-content
          .modal-header
            slot(name="header")
          .modal-body
            slot(name="body")
          .modal-footer
            slot(name="footer")
</template>

<style lang="scss" scoped>
.slide-enter-active {
  animation: coming .5s;
  opacity: 0;
}
.slide-leave-active {
  animation: going .5s;
}
@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.modal-mask {
  background-color: rgba(0, 0, 0, .5);
  display: table;
  height: 110%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9998;
}
.modal-header,
.modal-footer {
  background-color: #eee;
}
</style>
