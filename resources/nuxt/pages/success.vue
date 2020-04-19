<template>
   <v-app>
      <v-card width="500" class="mx-auto mt-5">
         <v-card-title>
	    <h1 class="display-1 mx-auto">Your password has been reset</h1>
	 </v-card-title>
	 <v-card-text>
            <v-text-field
            label="New Password"
            type="password"
            />
            <v-text-field
            label="Confirm Password"
            type="password"
            />
	    </v-form>
	 </v-card-text>
	 <v-card-action>
	    <v-btn class="ma-10">Change Password</v-btn>
	 </v-card-action>
      </v-card>
   </v-app>
</template>