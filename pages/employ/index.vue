<template>
        <div class="regis">
            <div class="cover">
                <!-- <img class="pic size-pic" src="../../assets/images/profile.jpg" alt="รูปโปรไฟล์"> -->
                <img class="pic size-pic" :src="profile.pictureUrl" alt="รูปโปรไฟล์">  
                <!-- ชื่อไฟล์.ตัวที่เอาไปเก็บ -->
            </div>
            <h2>ชื่อ</h2>
            <input type="text" placeholder="ชื่อ*" v-model="fName">
            <h2>นามสกุล</h2>
            <input type="text" placeholder="นามสกุล*" v-model="lName">
            <h2>เบอร์โทรศัพท์</h2>
            <input type="text" placeholder="เบอร์โทรศัพท์*" v-model="telNumber">
            <h2>E-mail</h2>
            <input type="text" placeholder="E-mail*" v-model="email">
            <nuxt-link to="/employ/profile">
                <button class="btn btn-green" @click="submit">ถัดไป</button>
            </nuxt-link>
	    </div>
</template>
<script>
import { db } from '~/plugins/firebase'
import liff from '@line/liff'
import { mapState,mapMutations } from 'vuex'
export default {
    computed: { //นำstoreไปใช้ วางไว้หน้าที่จะใช้ และเรียกใช้บนโค้ด **import mapState ด้วย   
		...mapState({
		    profile: state => state.profile.profileData
        })
    },
    data(){
        return{
            fName: '',
            lName: '',
            telNumber: '',
            email: ''
        }
    },
    methods:{
        submit(){
            db.collection("Freelance").add({
                freelanceId: docRef.id,
                firstName: this.fName,
                lastName: this.lName,
                lindId: this.profile.userId,
                phone: this.telNumber,
                pictureUrl: this.profile.image
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    },
}
</script>
<style scoped>
h1{
	font-size: 24px;
    margin-bottom: 20px;
}
.regis{
    width: 245px;
    margin: 0 auto;
}
.size-pic{
    width: 80px;
    height: 80px;
}
.cover{
    margin: 38px 0 24px 0;
}
.regis h2{
    font-size: 14px;
}
.btn{
    margin-top: 10px;
}

</style>