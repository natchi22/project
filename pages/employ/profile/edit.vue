<template>
    <div class="body">	
        <img class="pic size-pic" src="../../../assets/images/profile.jpg" alt="รูปโปรไฟล์">
        <h2>ชื่อ</h2>
        <input type="text" placeholder="ชื่อ*" v-model="fName">
        <h2>นามสกุล</h2>
        <input type="text" placeholder="นามสกุล*" v-model="lName">
        <h2>เบอร์โทรศัพท์</h2>
        <input type="text" placeholder="เบอร์โทรศัพท์*" v-model="telNumber">
		<h2>E-mail</h2>
        <input type="text" placeholder="E-mail*" v-model="email">
        <div class="div-btn">

                <button class="btn btn-green" @click="summit">บันทึก</button>
        </div> 
	</div>
</template>
<script>
export default {
	data(){
        return{
            fName: '',
            lName: '',
			telNumber: '',
			email:'',
        }
    },
}
</script>
<style scoped>
.size-pic{
    width: 80px;
    height: 80px;
}
</style>