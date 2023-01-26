<template>
  <component
    :is="dynamicSvg"
    v-if="dynamicSvg"
    class="icon"
  ></component>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

type IconSize = 'x-small' | 'small' | 'default' | 'large' | 'x-large';

interface IconComponentProps {
  svg: string;
  size?: IconSize | number;
}

const props = withDefaults(defineProps<IconComponentProps>(), {
  size: 30,
});

let dynamicSvg = ref(null);
onMounted(async () => {
  dynamicSvg.value = await importSvg(props.svg);
});

watch(
  () => props.svg,
  async (svgText) => {
    dynamicSvg.value = await importSvg(svgText);
  }
);

const importSvg = async (svgText: string) => {
  if (svgText) {
    return await import(`../assets/svg/${svgText}.svg`);
  }
};
</script>

<style lang="scss" scoped></style>
