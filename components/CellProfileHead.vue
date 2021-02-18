<template>
    <div class="body">	
        <div class="edit">
            <img class="pic size-pic" src="../assets/images/profile.jpg" alt="รูปโปรไฟล์">
            <nuxt-link to="/head/profile/edit">
                <button class="btn btn-green btn-size">แก้ไขข้อมูลส่วนตัว</button>
            </nuxt-link>
        </div>
        
        <div class="form">
            <a-icon 
                type="user" 
                :style="{ fontSize: '16px', color: '#555555' , margin: '5px'}"
            />
            <h2>{{fName}}     {{lName}}</h2>
        </div>
        <div class="form">
            <a-icon 
                type="phone" 
                :style="{ fontSize: '16px', color: '#555555' , margin: '5px'}"
            />
            <h2>{{telNumber}}</h2>
        </div>
        <div class="form">
            <a-icon 
                type="mail" 
                :style="{ fontSize: '16px', color: '#555555' , margin: '5px'}"
            />
            <h2>{{email}}</h2>
        </div>
        <div class="form">
            <img 
                src="../assets/images/iconline.png" 
                alt="ไอคอนไลน์"
            >
            <h2>{{idLine}}</h2>
        </div>
	</div>
</template>
<script>
export default {
	data(){
        return{
            fName: 'จิรัชญา',
            lName: 'นวลแก้ว',
			telNumber: '0829077908',
			email:'Nat.5124@gmail.com',
            idLine:'nat.chi'
        }
    },
}
</script>
<style scoped>
.size-pic{
    width: 80px;
    height: 80px;
}
.body img{
    margin: 0 0 10px 0;
}
.edit{
    display: flex;
    flex-direction: column;
    margin: 0 0 24px 0;
}
.form{
    display: flex;
    margin: 0 0  18px 0;
}
.form img{
    width: 16px;
    height: 16px;
    margin: 5px;
}
.form h2{
    margin: 0 0 0 16px;
}
.btn-size{
    width: 124px;
    height: 24px;
}
</style>