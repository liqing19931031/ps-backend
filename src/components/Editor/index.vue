<template lang="html">
  <div class="uedit">
			<VueEditor @ready="editorReady" :style="{ height: this.height + 'px'}"></VueEditor>
	</div>
</template>

<script>
import VueEditor from 'vue-ueditor'

export default {
  props: {
    form: {
      type: Object
    },
    keyname: {
      type: String
    },
    height: { // 默认300高
      type: Number,
      default: 300
    }
  },
  components: {
    VueEditor
  },
  mounted () {
    console.log(this.form)
  },
  methods: {
    editorReady (editorInstance) {
      editorInstance.setContent(this.form[this.keyname])
      editorInstance.addListener('contentChange', () => {
        this.form[this.keyname] = editorInstance.getContent()
      })
    }
  }
}
</script>

<style lang="css">
.uedit{
  line-height: 20px;
}
</style>
