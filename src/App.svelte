<script lang="ts">
    import { onMount } from 'svelte';
    import { QIcon } from "@nodegui/nodegui";
    import StepOne from "./components/StepOne.svelte";
    import StepTwo from "./components/StepTwo.svelte";
    import nodeguiIcon from "../assets/nodegui.jpg";

    const winIcon = new QIcon(nodeguiIcon);

    let win;

    onMount(() => {
        (window as any).win = win; // Prevent garbage collection.
        win.nativeView.show();
        return () => {
            delete (window as any).win;
        };
    });
</script>

<!-- TODO: Incorporate @nodegui/svelte-nodegui-preprocessor so that we can remove this namespace -->
<svelte:options namespace="foreign"/>
<window
    bind:this={win}
    windowIcon={winIcon}
    minSize={{ width: 500, height: 520 }}
    windowTitle="Hello 👋🏽"
>
    <view style="flex: 1;">
        <text id="welcome-text">Welcome to NodeGui 🐕</text>
        <text id="step-1">1. Play around</text>
        <StepOne />
        <text id="step-2">2. Debug</text>
        <StepTwo />
    </view>
</window>

<style>
    #welcome-text {
        font-size: 24px;
        padding-top: 20px;
        qproperty-alignment: 'AlignHCenter';
        font-family: 'sans-serif';
    }
    #step-1, #step-2 {
        font-size: 18px;
        padding-top: 10px;
        padding-horizontal: 20px;
    }
</style>
