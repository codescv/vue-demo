<template>
<div class="sticky">
  <div ref="child">
    <slot></slot>
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['top'],

  methods: {
    scrollHandler() {

      let offset = this.$el.getBoundingClientRect();
      let poffset = this.$el.parentElement.getBoundingClientRect();
      let el = this.$refs.child;
      // console.log('inside scroll handler', offset, poffset);
      // console.log('el:', this.$refs, 'poffset.top:', offset.top, 'this:', this.top);
      if (offset.top > this.top) {
        // console.log('static');
        $(el).css('position', 'static');
        $(el).removeClass('fixed');
      } else {
        // console.log('fixed');
        $(el).css('position', 'fixed');
        $(el).css('top', `${this.top}px`);
        $(el).css('width', $(el).parent().css('width'));
        $(el).addClass('fixed');
        $(el).css('z-index', 10);
      }
    }
  },
  mounted() {
    // 保证 this.$el 已经插入文档
    this.$nextTick(() => {
      window.addEventListener('scroll', this.scrollHandler, true);
      this.scrollHandler();
    });
  }
};
</script>
