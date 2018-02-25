<!-- Created by arron_Li on 17/12/8. // 左侧导航根据路由内容渲染 ->支持多层级子路由嵌套 -->
<template lang="html">
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <div class="menu-wrapper" v-for="(item, index) in routers" v-if="!item.hidden&&item.children">
        <router-link v-if="item.children.length === 1 && !item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
          <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
            <i v-if='item.children[0].icon' :class="`glyphicon glyphicon-${item.children[0].icon}`"></i>
            <span v-if="item.children[0].title">{{item.children[0].title}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-else :index="item.name||item.path" :key="item.name">
          <template slot="title">
            <i v-if="item.meta&&item.meta.icon" :class="`glyphicon glyphicon-${item.meta.icon}`"></i>
            <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
          </template>
          <template v-for="child in item.children" v-if="!child.hidden">
            <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
            <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
              <el-menu-item :index="item.path+'/'+child.path" style='padding-left: 60px'>
                <i v-if="child.meta&&child.meta.icon" :class="`glyphicon glyphicon-${child.meta.icon}`"></i>
                <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </div>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import ScrollBar from '@/components/ScrollBar'

export default {
  name: 'Sidebar',
  components: { ScrollBar },
  computed: {
    ...mapGetters([ // 路由组信息，根据此数据做导航渲染
      'routers',
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  mounted () {
    console.log(this.routers)
  }
}
</script>

<style lang='less'>
.is-active{
  li[role=menuitem]{
    background-color: #1f2d3d!important;
    &:hover{
      background-color: #16212d!important;
    }
  }
}
</style>
