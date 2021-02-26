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

                <button class="btn btn-green" @click="submit">บันทึก</button>
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
    display: flex;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0 auto 26px auto;
}
.div-btn{
    display: flex;
    justify-content: center;
}
.btn{
    width: 245px;
}
@media screen and (max-width: 1920px ) and (min-width: 768px ){
.body{
    width: 400px;
    margin: 0 auto;
}
}
</style>