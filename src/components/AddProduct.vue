<template>
  <section>
    <div class="h2">新增產品</div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="">產品編號（productNumber）</label>
          <input type="text" class="form-control" id="" placeholder="productNumber" v-model="productData.productNumber">
        </div>
        <div class="form-group col-md-3">
          <label for="">產品名稱（productName）</label>
          <input type="text" class="form-control" id="" placeholder="productName" v-model="productData.productName">
        </div>
        <div class="form-group col-md-3">
          <label for="">價格</label>
          <input type="number" class="form-control" id="" min="0" placeholder="price" v-model="productData.price">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="">顏色</label>
          <input id="" class="form-control" v-model="productData.color" />
        </div>
        <div class="form-group col-md-2">
          <label for="">庫存</label>
          <input type="number" class="form-control" id="" min="0" v-model="productData.inventory">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="">產品描述</label>
          <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="productData.remark"></textarea>
        </div>
      </div>

      <!-- <div class="form-row">
        <div class="form-group">
          <label for="">圖片上傳</label>
          <input type="file" class="form-control-file" id="" @change="postImg($event)">
        </div>
      </div> -->
      <div class="form-row">
        <div class="form-group col-md-4">
          <el-upload
            class="up-load-demo"
            action=''
            :on-change="changeHandler"
            :on-remove="removeHandler"
            :file-list="imgList"
            :auto-upload="false"
            :limit="limitImg"
            list-type="picture"
          >
          <el-button>點擊上傳</el-button>
            <div class="el-upload__tip">僅能上傳一張圖片(jpg/png)</div>
          </el-upload>
        </div>
      </div>
    </form> 
    <button class="btn btn-primary m-3" @click="addHandler">新增產品</button>
  </section>
</template>

<script>
import { apiProductListCreate } from '@/js/api.js'
export default {
  data() {
    return {
      limitImg: 1,
      imgList:[],
      productData : {
        productNumber:"",
        productName:"",
        price:"",
        remark:"",
        color:"",
        inventory:"",
        productImg:'',
      }
    }
  },
  methods: {
    // postImg(event) {
    //   let file = event.target.file[0]
    //   console.log(file)
    // },
    removeHandler(file, fileList) {
      console.log(file, fileList)
    },
    changeHandler(file) {
      console.log(file)
      console.log(URL.createObjectURL(file.raw))
      this.productData.productImg = URL.createObjectURL(file.raw)
    },
    addHandler() {
      console.log(this.productData)
      apiProductListCreate(this.productData)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>