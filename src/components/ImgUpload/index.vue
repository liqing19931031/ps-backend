<!-- 待优化 （只支持单张图片修改，有时间了进行修改）-->
<template>
	<div style="position:relative">
		<div class="img-body">
			<div class="down-load">
                <input type="file" accept="image/jpeg" class='form-control' @change='picUpload' ref="input" id="img">
                <i class="glyphicon glyphicon-download text-primary"></i>
                <div class="text-center" style="font-size: 12px;color: #333">
                    <div>点击上传图片</div>
                </div>
                <img :src="src" ref="img">
            </div>
		</div>
		<div v-if='IMGNAME !== ""'>{{IMGNAME}} <i class="glyphicon glyphicon-success text-success"></i>添加成功</div>
	</div>
</template>

<script>
	export default {
		props: {
      imgFile: { // 图片文件
          type: Object
      },
      imgRule: {// 上传图片规则
          type: Object
      }
    },
		data () {
			return {
				src: '',
				IMGNAME: ''
			}
		},
		methods: {
			picUpload (e) {
		        let image = new Image()
		        const reader = new FileReader()
		        const $img = e.target.files[0]
		        reader.onload = (e) => {
		            const src = e.target.result
		            image.src = src
		            this.$set(this, 'src', src)
		            image.onload = () => {
		                if (image.width / image.height !== +this.imgRule.ratio || $img.size > (+this.imgRule.size * 1024)) { // 图片尺寸限制
		                    // this.showAlert({
		                    //     message: '图片尺寸有误,请重新上传尺寸比例为1:1的图片',
		                    //     type: 'danger'
		                    // })
		                    // this.showAlert({
	                        //     message: '图片大小不能超过300k',
	                        //     type: 'danger'
	                        // })
		                } else { // 图片大小限制
	                        this.$set(this, 'IMGNAME', $img.name)
	                        this.$set(this.imgFile, 'pic', $img)
		                }
		            }
		        }
		        if (e.target.files && e.target.files[0]) {
		            reader.readAsDataURL(e.target.files[0])
		        }
		    }
		}
	}
</script>

<style lang='less'>
.img-body{
    border:1px dashed #ddd;
    width: 180px;
    height: 180px;
    border-radius: 8px;
    background-color: #fbfbfc;
    .down-load{
    	width: 100%;
    	height: 100%;
        text-align: center;
        font-size: 80px;
        overflow: hidden;
        color: #333;
        position: relative;
        img{
            left: 0;
            width: 100%;
            height: 100%;
            top: 0;
            display: block;
            position: absolute;
            div{
            	border-style: none;
            }
        }
        input[type="file"]{
        	display: inline-block;
        	width: 80px;
            cursor: pointer;
            height: 80px;
            opacity: 0;
            z-index: 2;
            position: absolute;
        }
    }
    .text-line{
        padding: 10px 20px;
        text-align: center;
    }
    .text-prompt{
        color: #ccc;
    }
    .text-strong{
        color: #333;
    }
}
</style>
