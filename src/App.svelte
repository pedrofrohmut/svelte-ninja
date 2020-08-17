<script>
import Header from "./components/Header.svelte"
import Footer from "./components/Footer.svelte"
import Tabs from "./shared/Tabs.svelte"
import AddPollForm from "./components/AddPollForm.svelte"

const items = Object.freeze(["Current Polls", "Add New Poll"])
let activeItem = items[1]

const handleTabChange = (customEvent) => {
  activeItem = customEvent.detail
  console.log(activeItem)
}
</script>

<div class="page">
  <Header class="header" />
  <main>
    <Tabs {activeItem} {items} on:tabChange={handleTabChange}/>
    {#if activeItem === items[0]}
      <p>CURRENT POLLS</p>
    {/if}
    {#if activeItem === items[1]}
      <AddPollForm />
    {/if}
  </main>
  <Footer class="footer" />
</div>

<style>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  max-width: 960px;
  margin: 40px auto;
}
</style>
