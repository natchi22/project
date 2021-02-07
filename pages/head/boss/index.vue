<template>
    <div class="body">
		<div class="profile-head">
			<img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
			<h2>ชื่อหัวหน้าใหญ่ เจ้าของ</h2>
		</div>
		<div class="tabs">
			<a-tabs type="card" @change="callback">
				<a-tab-pane key="1" tab="ตรวจงาน">
					<div class="box">
						<h1>{{ชื่องาน}}</h1>
					</div>
				</a-tab-pane>
				<a-tab-pane key="2" tab="รายชื่อ">
					<div class="box">
						<h1>{{ชื่อพนักงาน}}</h1>
					</div>
				</a-tab-pane>
       		</a-tabs>
		</div>
        


    </div>
</template>
<script>
export default {
  	data() {
    	return {
            
        };
  	},
  	methods: {
    	callback(key) {
      	console.log(key);
    },
  },
};
</script>
<style scoped>
.body{
	padding: 16px;
}
.tabs{
	padding: 0 32px;
}
.size-pic{
    width: 30px;
	height: 30px;
	margin: 0 15px 0 0;
}
.profile-head{
	display: flex;
	flex-direction: row;
	margin: 0 0 24px 0;
}
.box{
    box-shadow: 4px 4px 8px rgb(229,229,229);
    padding: 24px;
    margin: 0 0 20px 0;
}
</style>
<style>

</style>