<template>
    <div class="body">
		<div class="profile-head">
			<h2>ชื่อหัวหน้าใหญ่ เจ้าของ</h2>
			<nuxt-link to="/head/profile">
				<img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
			</nuxt-link>
			
		</div>
		<div class="tabs">
			<a-alert
                message="งานขึ้นบ้านใหม่"
                description="ช้ากว่ากำหนดแล้ว"
                type="warning"
                show-icon
                closable
                @close="onClose"
                class="alert"
            />
			<a-tabs type="card" @change="callback">
				<a-tab-pane key="1" tab="Project">
					<nuxt-link to="/head/boss/checkEmploy">
						<div class="box">
							<h1>{{form.taskName}}</h1>
							<div class="manager">
								<img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
								<h3>{{form.manager}} {{form.manager}}(ชื่อ สกุล)</h3>
							</div>
							
						</div>
					</nuxt-link>
				</a-tab-pane>

       		</a-tabs>
		</div>
        


    </div>
</template>
<script>
export default {
  	data() {
    	return {
            form:{
				taskName: 'งานขึ้นบ้านใหม่', //ชื่องานที่หัวหน้าคนนี้งานดูแลทั้งหมด
				date: null,
				manager: 'ชื่อหัวหน้า',
				tasks: []
            },
            //ชื่อพนักงานที่หัวหน้าคนนี้ดูแลทั้งหมด
            fName: 'จิรัชญา',
            lName: 'นวลแก้ว',
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
	margin: 0  0 0 15px;
}
.box{
    box-shadow: 4px 4px 8px rgb(229,229,229);
    padding: 24px;
    margin: 0 10px 20px 10px;
}
.manager{
	display: flex;
}
</style>
<style>

</style>