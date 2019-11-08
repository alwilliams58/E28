<template>
<div v-bind:class="{ result : result == 'Trick'}"
    <ul>
    <li>Attempt #: {{ try }}</li> 
    <li>Attempt #: {{ trick }}</li> 
    </ul>
    <button @click="$emit('delete-round',)> Bark </button> 
</template> 

<script>
module.exports =  {
    data: function () {
        return {

        }
    },
    props: {
        'try':{
            type:Number,
            default:0
        }
        }
    }
}
</script>

<style>
</style>