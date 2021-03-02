<template>

    <div class="modal fade" :id="showConfirm" data-backdrop="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Modal title</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>X</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button class="btn btn-primary" @click="sendConfirm">確認</button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  props: {
    showConfirm: {
      type: [String]
    }
  },
  methods: {
    sendConfirm() {
      this.$emit('sendConfirm')
    }
  }

}
</script>

<style>

</style>