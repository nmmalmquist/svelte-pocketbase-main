<script lang="ts">
  import { prevent_default } from "svelte/internal";
  import {currentUser, login, register} from "./lib/pocketbase"

  let name: string = "";
  let age: number;
  let username: string = "";
  let password: string = "";
  let confirmPassword: string = "";

  const clearForm = () => {
    name = "";
    age = null;
    username = "";
    password = "";
    confirmPassword = "";
  }
</script>

{#if $currentUser}
  <p>User {$currentUser.username} is logged in</p>
{:else }
  <form on:submit={(e) => {
    e.preventDefault()
    register(name,age,username,password,confirmPassword)
    clearForm()
  }}>
    <label for="name">Name</label>
    <input id="name" type="text" placeholder="name" bind:value={name}/>
    <label for="age">Age</label>
    <input id="age" type="number" placeholder="name" bind:value={age}/>
    <label for="">Username</label>
    <input type="text" placeholder="Username" bind:value={username}/>
    <label for="">Password</label>
    <input type="text" placeholder="Password" bind:value={password}/>
    <label for="">Confirm Password</label>
    <input type="text" placeholder="Confirm Password" bind:value={confirmPassword}/>
    <button type="submit">Create User</button>
  </form>
{/if}