<template>
    <div class="body">
        <div class="profile-head">
			<img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
			<h2>ชื่อหัวหน้าใหญ่ เจ้าของ</h2>
		</div>
        <h1>{{form.taskName}}</h1>
        <div class="box">
            <img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
            <h1>{{fName}} {{lName}}</h1>
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
    display: flex;
    box-shadow: 4px 4px 8px rgb(229,229,229);
    padding: 24px;
    margin: 0 32px 20px 32px;
}
</style>