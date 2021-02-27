<script lang="ts">
    import open from "open";

    function onClicked(): void {
        open("https://svelte.nodegui.org").catch(console.error);
    }
</script>

<!-- TODO: Incorporate @nodegui/svelte-nodegui-preprocessor so that we can remove this namespace -->
<svelte:options namespace="foreign"/>
<view style="margin-horizontal: 20px; padding-horizontal: 10px;">
    <text style="padding-right: 20px;" wordWrap={true}>
        {`
            <ol>
                <li>
                    Open chrome and navigate to chrome://inspect. You should see a target below with your app.
                </li>
                <br/>
                    <li>
                        Next click on  "Open dedicated DevTools for Node"
                    </li>
                    <br/>
                <li>
                    On the dedicated devtools. Click on Source > Node > "Your node process"
                </li>
            </ol>
        `}
    </text>
    <button
      style="margin-horizontal: 20px; height: 40px;"
      on:clicked={onClicked}
    >
        Open Svelte NodeGui docs
    </button>
</view>
