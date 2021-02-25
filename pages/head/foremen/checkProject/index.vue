<template>
    <div class="body">
        <div class="profile-head">
            <h2>{{head.fName}} {{head.lName}}</h2>
			<img class="pic size-pic" src="../../../../assets/images/profile.jpg" alt="รูปโปรไฟล์หัวหน้า">
			
		</div>
        <div class="task-name">
            <h1>{{form.taskName}}</h1>
        </div>    
        <!-- ถ้างานที่ส่งตรวจผ่านแล้ว แสดงช่องนี้ -->
        <div class="status">
            <div class="employ-name">
                <img class="pic size-pic-employ" src="../../../../assets/images/profile.jpg" alt="รูปโปรไฟล์พนักงานที่ส่งงาน">
                <h1>{{employ.fName}} {{employ.lName}}</h1>
            </div>
            <div class="top-succeed">
                <h2>{{index}}{{taskList.name}}</h2>
                
            </div>
            <div class="box-status">
                <div class="box-date">
                    <a-icon 
                        type="clock-circle" 
                        :style="{ fontSize: '14px', color: '#ffffff' }"
                    />
                    <h3>{{taskList.date}}</h3>
                </div>
                <div class="btn-status btn-succeed">
                    <h3>ตรวจแล้ว</h3>
                </div>
            </div>
            <div class="main">
                <h3 class="topic">แนบงาน</h3>
                <h3>:</h3>
                <h3 class="detail">{{urlTask}}</h3>
            </div>
            <div class="main">
                <h3 class="topic">รายละเอียด</h3>
                <h3>:</h3>
                <h3 class="detail">{{detailTask}}</h3>
            </div>
            <hr>
            <div class="main">
                <h3 class="topic">ความคิดเห็น</h3>
                <h3>:</h3>
                <h3 class="detail">{{commentTask}}</h3>
            </div>
        </div>
        <!-- งานที่ยังไม่ได้ส่ง แสดงช่องนี้ -->
        <div class="status">
            <div class="employ-name">
                <img class="pic size-pic-employ" src="../../../../assets/images/profile.jpg" alt="รูปโปรไฟล์พนักงานที่ส่งงาน">
                <h1>{{employ.fName}} {{employ.lName}}</h1>
            </div>
            <div class="top-succeed">
                <h2>{{index}}.{{taskList.name}}</h2>
                
            </div>
            <div class="box-status">
                <div class="box-date">
                    <a-icon 
                        type="clock-circle" 
                        :style="{ fontSize: '14px', color: '#ffffff' }"
                    />
                    <h3>{{taskList.date}}</h3>
                </div>
                <div class="btn-status btn-wait">
                    <h3>รอตรวจ</h3>
                </div>
            </div>
            <div class="main">
                <h3 class="topic">แนบงาน</h3>
                <h3>:</h3>
                <h3>{{urlTask}}</h3>
            </div>
            <div class="main">
                <h3 class="topic">รายละเอียด</h3>
                <h3>:</h3>
                <h3>{{detailTask}}</h3>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
		return{
			
			dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
			form:{
				taskName: 'งานขึ้นบ้านใหม่',
				date: '01/01/2021',
				manager: null,
				tasks: []
			},
			taskList: {
				name: 'stepงานย่อย1',
				date: '16/01/2021'
            },
            employ:{
                fName: 'จิรัชญา',
                lName: 'นวลแก้ว(พนง.ที่คนที่ส่งงานนี้)',
                urlProfile: null 
            },
            head:{
                fName: 'ชื่อหัวหน้างาน',
                lName: '(คนที่เข้าระบบมา)',
                urlProfile: null 
            },
            urlTask:'งานที่แนบมา',
            detailTask:'รายละเอียดที่พนักงานกรอก ส่งมาให้หัวหน้างานตรวจ',
            commentTask:'คอมเม้นจากหัวหน้างาน',
            index: 0
		}
  	},
}
</script>
<style scoped>
.body{
	padding: 16px;
}
.task-name{
    display: flex;
    justify-content: center;
    margin: 0 0 24px 0;
}
.size-pic{
    width: 30px;
	height: 30px;
	margin: 0 0 0 15px;
}
.size-pic-employ{
    width: 40px;
	height: 40px;
	margin: 0 24px 0 0;
}
/* กรอบตรวจแล้ว อยู่style*/
/* div ชื่อคนในกรอบงานตรวจ */
.employ-name{
    display: flex;
    justify-content: center;
    margin: 0 0 8px 0;
}
.status{
    margin: 0 32px 20px 32px;
}
</style>