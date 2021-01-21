<template>
	<div class="login">
		<h1>เข้าสู่ระบบ</h1>
		<input type="user" placeholder="ชื่อผู้ใช้" v-model="user">
		<input type="password" placeholder="รหัสผ่าน" v-model="password">
		<button class="btn btn-green" @click="login" >
			เข้าสู่ระบบ
		</button>
        <nuxt-link to="/head/register">
            <button class="btn btn-green" @click="register" >
                สมัครสมาชิก
            </button>
        </nuxt-link>
	</div>
</template>
<script>
// import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return{
            user: '',
            password: ''
        }
    },
    // methods:{
    //     async login(e) {
    //         e.preventDefault();
    //         if (this.user && this.password) {
    //             try {
    //                 await this.$fireAuth.signInWithEmailAndPassword(this.user,  this.password);
    //                 this.$router.push('/admin/history');
    //             } catch (e) {
    //                 this.$router.push('/admin');
    //             }
    //         }

    //     }
        
    // }
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
    margin-bottom: 26px;
}
.btn-green{
    margin: 0 0 16px 0;
}
</style>