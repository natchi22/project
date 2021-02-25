<template>
	<div class="login">
		<h1>สมัครสมาชิก</h1>
        <div class="div-pic">
            <img class="pic size-pic" src="~/assets/images/profile.jpg" alt="รูปโปรไฟล์">
        </div>
        <h2>Username</h2>
		<input type="user" placeholder="ชื่อผู้ใช้" v-model="user">
        <h2>Password</h2>
		<input type="password" placeholder="รหัสผ่าน" v-model="password">
        <h2>ชื่อ</h2>
        <input type="fName" placeholder="ชื่อ" v-model="fName">
        <h2>นามสกุล</h2>
        <input type="lName" placeholder="นามสกุล" v-model="lName">
        <h2>เบอร์โทรศัพท์</h2>
        <input type="telNumber" placeholder="เบอร์โทรศัพท์" v-model="telNumber">
        <button class="btn btn-green" @click="register" >
            สมัครสมาชิก
        </button>
	</div>
</template>
<script>
export default {
    data(){
        return{
            user:'',
            password:'',
            fName: '',
            lName: '',
			telNumber: '',
        }
    },
    methods:{
        async register() {
            register();
            

        }
        
    }
}
</script>
<style scoped>
.login{
    display: flex;
    flex-direction: column;
    width: 245px;
    margin: 0 auto;
    text-align: center;
    color: #000000;
}
.login h1{
    font-size: 36px;
    font-weight: bold;
    color: #3ABCA7;
    margin: 30px 0 16px 0;
}
h2{
    text-align: left;
}
.div-pic{
    display: flex;
    justify-content: center;
    margin: 0 0 16px 0;
}
.size-pic{
    width: 80px;
    height: 80px;
}
</style>