<template>
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
</template>
<script>
export default {
    data(){
        return{
            nameTask:'งานขึ้นบ้านใหม่',
            dateStart: '01/01/2021',
            dateEnd: '01/02/2021',
        }
    },
}
</script>
<style scope>
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
</style>