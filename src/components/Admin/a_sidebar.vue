
<template>
  
    <v-navigation-drawer height="100%" permanent color=#130d70 >
       <v-list
        dense nav
       >
      <v-list-item-group
        v-model="selectedItem"
        color="white"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link" link >
          <v-list-item-icon >
            <v-icon color="white" >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        selectedItem: 1,
        items: [
          { title: 'STUDENT', icon: 'mdi-account-multiple', link: '/createStudent' },
          { title: 'TEACHER', icon: 'mdi-account-multiple', link: '/createTeacher'},
          { title: 'ANNOUNCEMENTS', icon: 'mdi-message-text',link: '/announcement' },
        ],
        right: null,
      }
    },
  }
</script>