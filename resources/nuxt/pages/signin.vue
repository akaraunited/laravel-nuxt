<template>
   <v-app>
      <v-card width="500" class="mx-auto mt-5">
         <v-card-title>
	    <h1 class="display-1 mx-auto">Sign In</h1>
	 </v-card-title>
	 <v-card-text>
	    <v-form>
	       <v-text-field
		    label="Username" 
		/>
            <v-text-field
            label="Password"
            type="password"
            />
	    </v-form>
	 </v-card-text>
	 <v-card-action>
	    <v-btn rounded color="primary" class="ma-10">Sign In</v-btn>
		<p>
		<span class="pl-10"><a href="#">Forget your password?</a></span>
		<span class="pl-10">Don't have an account? <a href="#">Sign Up!</a></span>
		</p>
	 </v-card-action>
      </v-card>
   </v-app>
</template>