<script lang="ts">
    import open from "open";

    function onClicked(): void {
        open("https://svelte.nodegui.org").catch(console.error);
    }
</script>

<view style="margin-top: 8px; margin-horizontal: 16px; padding-horizontal: 8px;">
    <text style="margin-bottom: 8px;" wordWrap={true}>
        {`
            <ol>
                <li>
                    Open chrome and navigate to chrome://inspect. You should see a target below with your app.
                </li>
                <br/>
                    <li>
                        Next click on "Open dedicated DevTools for Node"
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
        Open the Svelte NodeGUI docs
    </button>
</view>
