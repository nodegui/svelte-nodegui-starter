<script lang="ts">
    const dogImg = require("./dog");
</script>

<!-- TODO: Incorporate @nodegui/svelte-nodegui-preprocessor so that we can remove this namespace -->
<svelte:options namespace="foreign"/>
<view style="margin-horizontal: 20px; padding-horizontal: 10px;">
    <text wordWrap={true}>
        Edit App.svelte to make changes to this screen. Then come back to see your changes. The app will restart with each change, thanks to Live Reload. 🔥
    </text>
    <text>
      {`
        <p style="color: rgb(255,72,38);"> 
          <center>
            <img src="${dogImg}" alt="doggy" />  
          </center>
          <center>You can even use <i><strong>Rich Html</strong></i> text like this if you want 😎.</center>
        </p>
        <hr />
      `}
    </text>
</view>
