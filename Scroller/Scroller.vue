<template>
  <div id="scroller">
    <div>{{ currentProp }}</div>
    <p
      v-for="s in sectionsProps"
      :key="s"
      class="link"
      :class="currentSection === s ? 'active' : ''"
      @click="changeSection(s)"
    >
      {{ s }}
    </p>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    sections: { type: Array, default: () => [] },
    current: { type: String, default: "" },
  },
  setup(props, { emit }) {
    const currentSection = ref(props.sections[0]);
    const changeSection = (section) => {
      currentSection.value = section;
      emit("changed", section);
    };
    watch(props, (val) => {
      currentSection.value = val.current;
    });

    return {
      changeSection,
      currentSection,
      sectionsProps: props.sections,
      currentProp: props.current,
    };
  },
};
</script>

<style lang="scss">
#scroller {
  position: fixed;
  top: 10%;
  right: 10%;
}
.link {
  cursor: pointer;
  color: orange;
  transition: 0.3s ease-in-out;
}
.link:hover {
  color: black;
}

.active {
  color: blue;
}
</style>
