<template>
	<div class="body">
        <div class="cover">
                <!-- <img class="pic size-pic" :src="profile.pictureUrl" alt="รูปโปรไฟล์">  ชื่อไฟล์.ตัวที่เอาไปเก็บ -->
                <img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
        </div>
        <div class="head">
            <h2>{{fName}}</h2>
            <h2>{{lName}}</h2>
        </div>
        <!-- <CellBoxTask/> -->
        <div class="box">
            <h1>{{nameTask}}</h1>
            <div class="dateTask">
                <h2 class="topic">เริ่ม :</h2>
                <h2>{{dateStart}}</h2>
            </div>
            <div class="dateTask">
                <h2 class="topic">สิ้นสุด :</h2>
                <h2>{{dateEnd}}</h2>
            </div>
            <div >
                <a-progress :percent="50" status="active" />
            </div>
	    </div>
        <nuxt-link to="/employ/work">
            <button class="btn btn-green" @click="summit">เพิ่มงาน</button>
        </nuxt-link>
        
	</div>
</template>

<script>
export default {
    
    data(){
        return{
            fName: 'จิรัชญา',
            lName: 'นวลแก้ว',
            nameTask:'งานขึ้นบ้านใหม่',
            dateStart: '01/01/2021',
            dateEnd: '01/02/2021',
        }
    },
}
</script>

<style scoped>
.box{
    box-shadow: 4px 4px 8px rgb(229,229,229);
    padding: 24px;
    margin: 0 0 24px 0;
}
.dateTask{
    display: flex;
    padding: 0 0 0 10px;
}
.topic{
    width: 56px;
}
h1{
    text-align: center;
}
/* รูป */
.size-pic{
    width: 80px;
    height: 80px;
}
.cover{
    margin-bottom: 24px;
}
.head{
    display: flex;
}
.btn{
    width: 180px;
}
</style>