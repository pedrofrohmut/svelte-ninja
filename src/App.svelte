<script>
import Header from "./components/Header.svelte"
import Footer from "./components/Footer.svelte"
import Tabs from "./shared/Tabs.svelte"
import PollList from "./components/PollList.svelte"
import AddPollForm from "./components/AddPollForm.svelte"

const tabNames = Object.freeze(["Current Polls", "Add New Poll"])
export const CURRENT_POLLS = tabNames[0]
export const ADD_NEW_POLL = tabNames[1]

let activeTab = CURRENT_POLLS

const handleTabChange = (customEvent) => { activeTab = customEvent.detail }

const handleAdd = () => { activeTab = CURRENT_POLLS }
</script>

<Header />
<main>
  <Tabs {activeTab} {tabNames} on:tabChange={handleTabChange} />
  {#if activeTab === CURRENT_POLLS}
    <!-- <pre>{JSON.stringify(polls, null, 2)}</pre> -->
    <PollList />
  {/if}
  {#if activeTab === ADD_NEW_POLL}
    <AddPollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
main {
  max-width: 960px;
  margin: 40px auto;
}
</style>
