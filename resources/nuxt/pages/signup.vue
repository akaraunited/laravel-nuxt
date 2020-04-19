<template>
   <v-app>
      <v-card width="500" class="mx-auto mt-5">
         <v-card-title>
	    <h1 class="display-1 mx-auto">Sign Up</h1>
	 </v-card-title>
	 <v-card-text>
	    <v-form>
	       <v-text-field
		    label="Username" 
		/>
        <v-text-field
		    label="Email" 
		/>
            <v-text-field
            label="Password"
            type="password"
            />
            <v-text-field
            label="Confirm Password"
            type="password"
            />
            <v-checkbox
            label="I agree with the terms and conditions"
            >
            </v-checkbox>
            
	    </v-form>
	 </v-card-text>
	 <v-card-action>
	    <v-btn class="ma-10">Sign Up</v-btn>
	 </v-card-action>
      </v-card>
   </v-app>
</template>