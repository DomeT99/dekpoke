<template>
  <section class="container mx-auto">
    <div class="text-center mb-[3rem] mt-[3rem]">
      <h1>List of Pokemon</h1>
    </div>
    <div  class="grid lg:grid-cols-6 md:grid-cols-3 gap-[3rem] mb-[8rem] max-h-[55rem] overflow-auto">
      <div v-for="i in 1278"><Card /></div>
    </div>
  </section>
</template>
