<template>
	<div class="body"> 
		<h2>งาน</h2>
		<a-input 
			class="boxInput"
			placeholder="ชื่อ Project*"    
			v-model="form.taskName"
		/>

		<h2>กำหนดส่งงาน</h2>
		<a-date-picker 
			class="boxDate"
			@change="onChange"
			placeholder="กำหนดส่ง Project*"
			v-model="form.date"
		/>

		<h2>หัวหน้างาน</h2>
		<a-dropdown-button>
			หัวหน้างาน*
			<a-menu slot="overlay" 
				@click="handleMenuClick"
				v-model="form.manager"
			>
				<a-menu-item key="1"> <a-icon type="user" />หัวหน้าคนที่่ 1</a-menu-item>
				<a-menu-item key="2"> <a-icon type="user" />หัวหน้าคนที่ 2</a-menu-item>
				<a-menu-item key="3"> <a-icon type="user" />หัวหน้าคนที่ 3</a-menu-item>
			</a-menu>
			<a-icon slot="icon" type="user" />
		</a-dropdown-button>

		<div class="box" >
			<div class="topic" >
				<h2>ลำดับงาน :</h2>
				<a-input 
				class="boxInput"
				placeholder="ลำดับงาน*"   
				allow-clear 
				v-model="taskList.name"/>
			</div>
			<div class="topic">
				<h2>นัดตรวจ :</h2>
				<a-date-picker 
				class="boxDate"
				@change="onChange"
				:format="dateFormatList"
				:disabled-date="disabledDate"
				placeholder="นัดตรวจ*"
				v-model="taskList.date"/>
			</div>
        </div>
		<div class="div-list">
			<button 
				class="btn btn-green btn-size-list" 
				@click="addList()"
				>เพิ่มลิส
			</button>
		</div>
        
		<div class="box-list" v-for="(item,index) in form.tasks" :key="index">
			<div class="div-delete">
				<a-icon 
					type="close"
					v-on:click="remove(index)"
				/>
			</div>
			<div class="topic" >
				<h2>{{index+1}}. {{item.name}}</h2>
			</div>
			<div class="topic">
				<h3>กำหนดส่ง : {{item.date}}</h3>
			</div>
		</div>
		<br>
		<div class="div-add">
			<button 
				class="btn btn-green btn-size-add" 
				@click="addWork()"
				>เพิ่มงาน
			</button>
		</div>
		
	</div>
</template>
<script>
import moment from 'moment';
export default {
	
	data(){
		return{
			moment,
			dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
			form:{
				taskName: '',
				date: null,
				manager: null,
				tasks: []
			},
			taskList: {
				name: null,
				date: null
			},
		}
  	},
	methods: {
		addList() {
		this.form.tasks.push({
			name: this.taskList.name,
			date: this.taskList.date
		})
		this.taskList = {
			name: null,
			date: null
		}
		},
		remove(index) {
		this.form.tasks.splice(index, 1)
		},
		// addWork() {
		//   this.work.push(this.nameWork)
		// },
		//     onChange(date, dateString) {
		
		//       console.log(date, dateString)
		// },
		handleButtonClick(e) {
		console.log('click left button', e)
		},
		handleMenuClick(e) {
		this.form.manager = e.key
		},
  	},
}
</script>
<style scope>
.btn{
	font-size: 12px;
}
.btn-size-list{
	width: 50px;
	height: 26px;
	margin: 0 0 28px 0;
}
.div-list{
	display: flex;
	justify-content: flex-end;
	padding: 0 24px;
}
.div-add{
	display: flex;
	justify-content: center;
}
.div-delete{
	display: flex;
	justify-content: flex-end;
}
.btn-size-add{
	width: 180px;
	height: 32px;
}
.boxDate{
	width: 150px;
}
.box{
	padding: 24px 24px 14px 24px;
}
.box-list{
	padding: 16px 18px;
	box-shadow: 4px 4px 8px rgb(229,229,229);
	margin: 0 0 20px 0;
}
.topic{
	
	margin: 0 0 10px 0;
}
.topic h2{
	width: 80px;
	height: 18px;
}

</style>