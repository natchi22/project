<template>
    <div class="box">
        <div class="topic" >
            <h2>{{index}}. </h2>
            <h2>{{nameWork}}</h2>
        </div>
        <div class="topic">
            <h3>กำหนดส่ง :</h3>
            <a-date-picker 
            @change="onChange"
            placeholder="กำหนดส่ง"/>
        </div>
    </div>
</template>

<style scope>
.box{
    box-shadow: 4px 4px 8px rgb(229,229,229);
    padding: 24px;
    margin: 0 0 24px 0;
}
.topic{
    display: flex;
}
</style>