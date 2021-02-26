<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        หน้าแรก ต่อLine
      </h1>
      <div class="links">
        <a
          href="/head"
          class="button--green"
        >
          Head
        </a>
        <a
          href="employ"
          class="button--grey"
        >
          Employ
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import liff from '@line/liff'
import { mapState,mapMutations } from 'vuex'
export default {
  	// data () {
    // 	return {
	// 		image: '',
	// 		name:'',
	// 		userId:'',   
			
	// 		inforFrelance:{},
    //         freelanceData:'',
    //         fName: '',
    //         lName: '',
    //         telNumber: '',
    //         lineId: '',
    //         task:null,

	// 	}
	// },
	computed: { //นำstoreไปใช้ วางไว้หน้าที่จะใช้ และเรียกใช้บนโค้ด **import mapState ด้วย   
		...mapState({
		profile: state => state.profile.profileData
    })
    },
  	methods:{
    	...mapMutations({
        	saveProfile: 'profile/saveProfile'
		}),
	},
 	async mounted () {
    	const data = {
      	img : this.image,
      	id : this.userId,
     	name : this.name
	}
	
    liff.init({ liffId: '1655688087-NzP8r7n2' })
      	.then(() => {
        	if (liff.isLoggedIn()) {
				const queryString = decodeURIComponent(window.location.search).replace("?liff.state=", "")
                const params = new URLSearchParams(queryString)
          		liff.getProfile().then(async (profile) => { 
					const userId = profile.userId ///เอาuser id line จากที่ได้ตรงนี้ไปเก็บใน firestore get เข้าไปพร้อมกับหน้าfreelance index
					const image = profile.pictureUrl
					const name = profile.displayName
					this.userId = userId
					this.name = name
					this.image = image
					this.saveProfile(profile)
					console.log(this.profile,profile)
					if (params.get('page') === 'employ'){
						const getInfo = await this.$fireStore.collection("Freelance").where("lineId",'==',this.profile.userId ).get()
						getInfo.forEach((doc)=>{
							this.inforFrelance = doc.data()
						}) 
						if(this.inforFrelance.lineId && 
							this.inforFrelance.firstName && 
							this.inforFrelance.lastName && 
							this.inforFrelance.phone)
						{
								const freelance = await this.$fireStore.collection("Freelance").where("lineId",'==',this.profile.userId ).get()
								freelance.forEach((doc)=>{
								this.freelanceData = doc.data()
								})

							const dateTime = await this.$fireStore.collection("Task")
							.where("freelanceId",'==',  this.freelanceData.freelanceId)
							.where("status",'==',  false).get()
							dateTime.forEach((doc)=>{
								this.task = doc.data()
							}) 

							if (this.task !== null) {
								this.$router.replace('/employ/checkout')
							}
							else {
								this.$router.replace('/employ/checkin')
							}
						}
						else{
							this.$router.replace('/employ')
						}
					}
					else if (params.get('page') === 'profile'){
						this.$router.replace('/employ/project')
					}
				else if (params.get('page') === 'history'){
					this.$router.replace('/employ/history')
				} 
          		})
       		}
        	else{
          		liff.login()
        	}
      	})
      	.catch((err) => {
            alert('Connect failed, please try again.')
            liff.closeWindow()
        })
  	}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
