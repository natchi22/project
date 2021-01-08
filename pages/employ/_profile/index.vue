<template>
	<div class="body">
        <div class="cover">
                รอรูป
                <!-- <img class="pic size-pic" :src="profile.pictureUrl" alt="รูปโปรไฟล์">  ชื่อไฟล์.ตัวที่เอาไปเก็บ -->
        </div>
        <div class="head">
            <h2>{{fName}}</h2>
            <h2>{{lName}}</h2>
        </div>
        <CellBoxTask/>
        <CellBoxTask/>
        <nuxt-link to="/employ/profile">
            <button class="btn btn-green" @click="summit">เพิ่มงาน</button>
        </nuxt-link>
        
	</div>
</template>

<script>
import CellBoxTask from '@/components/employ/CellBoxTask'
export default {
    data(){
        return{
            fName: 'จิรัชญา',
            lName: 'นวลแก้ว'
        }
    },
}
</script>

<style scoped>
.body{

    padding: 38px;
    margin: 0 auto;
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