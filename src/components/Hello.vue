<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-12">
      <h1>Title</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      <sticky :top="0">
        <div class="top">
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">1</button>
            <button type="button" class="btn btn-default">2</button>

            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Dropdown link</a></li>
                <li><a href="#">Dropdown link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </sticky>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-3">
      <sticky :top="50">
        <div class="side">
          <h2>side menu</h2>
          <p>aaa</p>
          <p>bbb</p>
        </div>
      </sticky>
    </div>
    <div class="col-lg-9">
      <div class="main">
        Main content
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Sticky from '@/components/Sticky.vue';
export default {
  components: {
    Sticky
  }
};
</script>

<style>
.top {
  /*margin-bottom: 20px;*/
  background: #123;
  border: 1px solid #999;
}

.row {
  /*margin-bottom: 10px;*/
}

.side, .main {
  background: #eee;
  border: 1px solid #999;
  padding: 10px;
}

.main {
  height: 900px;
}

</style>
