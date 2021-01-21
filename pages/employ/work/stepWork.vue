<template>
    <div class="body">
        <div class="top">
            <div>
                <h1>{{form.taskName}}</h1>
                <div class="boxTime">
                    <a-icon 
                        type="clock-circle" 
                        :style="{ fontSize: '24px', color: '#ffffff' }"
                    />
                    <h2>16/04/1998</h2>
                </div>
            </div>
            <div>
                <img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
            </div>
            
        </div>
        <a-progress 
            :percent="50" 
            status="active" 
            class="progress"
        />
        <div class="status">
            <div class="top-succeed">
                <h2>ชื่อstep</h2>
                <div class="btn-status btn-succeed">
                    <h3>ตรวจแล้ว</h3>
                </div>
            </div>
            <div class="main">
                <h3 class="topic">กำหนดส่ง</h3>
                <h3>:</h3>
                <h3 class="detail">{{taskList.date}}</h3>
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
            <div class="main">
                <h3 class="topic">ความคิดเห็น</h3>
                <h3>:</h3>
                <h3 class="detail">{{commentTask}}</h3>
            </div>
        </div>
        <div class="status">
            <div class="top-succeed">
                <h2>ชื่อstep</h2>
                <div class="btn-status btn-wait">
                    <h3>รอตรวจ</h3>
                </div>
            </div>
            <div class="main">
                <h3 class="topic">กำหนดส่ง</h3>
                <h3>:</h3>
                <h3 class="detail">{{taskList.date}}</h3>
            </div>
            <div class="main">
                <h3 class="topic">แนบงาน</h3>
                <h3>:</h3>
                <a-input 
                    class="boxInput"
                    placeholder="URL*"    

                />
            </div>
            <div class="main">
                <h3 class="topic">รายละเอียด</h3>
                <h3>:</h3>
                <a-textarea 
                    class="boxInput"
                    placeholder="รายละเอียดงาน*" 
                    :rows="4" 
                />
            </div>
            <div class="main">
                <h3 class="topic">ความคิดเห็น</h3>
                <h3>:</h3>
                <h3 class="detail">{{commentTask}}</h3>
            </div>
            <div class="btn-check">
                <button 
                    v-on:click="check()"
                    class="btn btn-green btn-size"
                >ตรวจ
                </button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    // data(){
	// 	return{
	// 		moment,
	// 		dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
	// 		form:{
	// 			taskName: '',
	// 			date: null,
	// 			manager: null,
	// 			tasks: []
	// 		},
	// 		taskList: {
	// 			name: null,
	// 			date: null
	// 		},
	// 	}
    // },
    data(){
		return{
			
			dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
			form:{
				taskName: 'งานขึ้นบ้านใหม่',
				date: null,
				manager: null,
				tasks: []
			},
			taskList: {
				name: null,
				date: 'null'
            },
            urlTask:'URLงานที่แนบมา',
            detailTask:'รายละเอียดการทำงานชิ้นนี้รายละเอียดการทำงานชิ้นนี้รายละเอียดการทำงานชิ้นนี้',
            commentTask:'คอมเม้นจากหัวหน้างานคอมเม้นจากหัวหน้างานคอมเม้นจากหัวหน้างาน'
		}
  	},
    methods: {
		check() {
		    this.form.tasks.push({
			name: this.taskList.name,
			date: this.taskList.date
		})
		    this.taskList = {
			name: null,
			date: null
		}
		},
		
  	},
}
</script>
<style scoped>
/* รูป */
.size-pic{
    width: 80px;
    height: 80px;
}
.top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 24px 0;
}
.boxTime{
    display: flex;
    flex-direction: row;
    background: #FF0000;
    border-radius: 4px;
    padding: 3px 9px;
}
.boxTime h2{
    color: #ffffff;
}
h2{
    padding: 0 0 0 4px;
}
.progress{
    margin: 0 0 20px 0;
}
/* กรอบตรวจแล้ว */
.status{
    box-shadow: 4px 4px 8px rgb(229,229,229);
    padding: 16px 18px 12px 18px;
    margin: 0 0 20px 0;
}
.top-succeed{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin: 0 0 2px 0;
}
.btn-status{
    border-radius: 4px;
    width: 80px;
    height: 20px;
}
.btn-succeed{
    background-color: #0BB807;
}
.btn-wait{
    background-color: #FFB524;
}
.btn-status h3{
    color: #ffffff;
    text-align: center;
}
.main{
    display: flex;
    flex-direction: row;
    padding: 6px 0;
}
.topic{
    width: 80px;
    
}
.detail{
    width: 200px;
    margin: 0 0 0 5px;
}
.boxInput{
    width: 80%;
    margin: 0 0 0 5px;
}
.btn-size{
    width: 80px;
    height: 20px;
    font-size: 12px;
}
.btn-check{
    display: flex;
    justify-content: center;
}
</style>