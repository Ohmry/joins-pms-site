<template>
  <main id="app-context-menu" :style="this.layer">This is contextmenu.</main>
</template>

<script>
import { AppContextMenuEvents } from '../events'

export default {
  data: () => {
    return {
      layer: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        border: '1px solid #B7B7B7',
        display: 'none'
      },
      visible: false
    }
  },
  methods: {
    onOpen: function (params) {
      const top =
        params.srcElement.offsetTop + params.srcElement.clientHeight + 10
      const left =
        (params.srcElement.offsetLeft + params.srcElement.clientWidth) / 2
      this.layer.left = left + 'px'
      this.layer.top = top + 'px'
      this.layer.display = 'block'
      setTimeout(() => {
        document.addEventListener('click', this.clickOutside)
      }, 250)
    },
    onClose: function (e) {
      this.layer.display = 'none'
      document.removeEventListener('click', this.clickOutside)
    },
    clickOutside: function (e) {
      const element = this
      const mouseX = e.x
      const mouseY = e.y
      const insideClicked =
        mouseX >= element.$el.offsetLeft &&
        mouseX <= element.$el.offsetLeft + element.$el.offsetWidth &&
        mouseY >= element.$el.offsetTop &&
        mouseY <= element.$el.offsetTop + element.$el.offsetHeight
      if (!insideClicked) {
        this.onClose()
      }
    }
  },
  mounted: function () {
    AppContextMenuEvents.$on('open', this.onOpen)
    AppContextMenuEvents.$on('close', () => this.onClose())
  }
}
</script>

<style lang="scss" scoped>
main {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: var(--background-secondary-color);
}
</style>
