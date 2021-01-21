<template>
	<div class="body"> 
		<h2>งาน</h2>
		<a-input 
			class="boxInput"
			placeholder="ลำดับงาน*"    
			v-model="form.taskName"
		/>

		<h2>กำหนดส่งงาน</h2>
		<a-date-picker 
			class="boxDate"
			@change="onChange"
			placeholder="กำหนดส่ง*"
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
        <button 
			class="btn btn-green btn-size" 
			@click="addList()"
			>เพิ่มลิส
		</button>
		<div class="box" v-for="(item,index) in form.tasks" :key="index">
			<div class="topic" >
				<h2>{{index+1}}</h2>
				<h2>{{item.name}}</h2>
			</div>
			<div class="topic">
				<h3>กำหนดส่ง :</h3>
				<h3>{{item.date}}</h3>
			</div>
	   		<button v-on:click="remove(index)">ลบ</button>
		</div>
		<button 
			class="btn btn-green" 
			@click="addWork()"
			>เพิ่มงาน
		</button>
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
.btn-size{
	width: 50px;
	height: 26px;
}
.boxDate{
	width: 150px;
}
.box{
	padding: 24px 24px 14px 24px;
}
.topic{
	
	margin: 0 0 10px 0;
}
.topic h2{
	width: 80px;
	height: 18px;
}

</style>