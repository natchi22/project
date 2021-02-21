<template>
	<div>
        <div class="regis">
            <div class="cover">
                <!-- <img class="pic size-pic" src="../../assets/images/profile.jpg" alt="รูปโปรไฟล์"> -->
                <img class="pic size-pic" :src="profile.pictureUrl" alt="รูปโปรไฟล์">  ชื่อไฟล์.ตัวที่เอาไปเก็บ
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
                <button class="btn btn-green" @click="summit">ถัดไป</button>
            </nuxt-link>
	    </div>
	</div>
</template>

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
    margin-bottom: 24px;
}
.regis h2{
    font-size: 14px;
}
.btn{
    margin-top: 10px;
}

</style>