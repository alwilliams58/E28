<template>
<div v-bind:class="{ result : result == 'Trick'}"
    <ul>
    <li>Attempt #: {{ try }}</li> 
    <li>Attempt #: {{ trick }}</li> 
    </ul>
    <button @click="$emit('delete-round',)> Bark </button> 
</template> 