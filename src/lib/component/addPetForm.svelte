<script lang="ts">
  import type { Record } from "pocketbase";
    import { onMount, prevent_default } from "svelte/internal";
    import {getUsers, getPetTypes, addPet} from "../pocketbase"


    let name: string = "";
    let userID: string = "Select User";
    let petTypeID: string = "Select Pet Type";

    let userIDList: Record[]=[];
    let petTypeIDList: Record[] =[];

    onMount(async () => {
      userIDList = await getUsers()
      petTypeIDList = await getPetTypes()
    })
  
    const clearForm = () => {
      name = "";
      userID = "";
      petTypeID = "";
      
    }
  </script>
  

    <form on:submit={(e) => {
      e.preventDefault()
      addPet(name,petTypeID,userID)
      clearForm()
    }}>
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="name" bind:value={name}/>
      <label for="age">User</label>
      <select bind:value={userID} on:change={(e) =>{}} >
        {#each userIDList as user}
          <option value={user.id}>
            {user.name}
          </option>
        {/each}
      </select>
      <label for="">Pet Type</label>
      <select bind:value={petTypeID} >
        {#each petTypeIDList as petType}
          <option value={petType.id}>
            {petType.type}
          </option>
        {/each}
      </select>
      <button type="submit">Create Pet</button>
    </form>

  