import { ref, onMounted, watch, onUnmounted } from "vue";

export default function(sections) {
  const currentSection = ref(null);

  const checkSection = () => {
    const s = sections;
    s.forEach((sec) => {
      const element = document.getElementById(sec);
      const rect = element.getBoundingClientRect();
      if (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left <
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top <
          (0.5 * window.innerHeight ||
            0.5 * document.documentElement.clientHeight)
      ) {
        currentSection.value = sec;
      }
    });
  };
  const scrollToSection = (s) => {
    console.warn(s);
    document.getElementById(s).scrollIntoView({ behavior: "smooth" });
  };
  watch(currentSection, (val) => {
    currentSection.value = val;
  });
  onMounted(() => {
    window.addEventListener("scroll", checkSection);
    checkSection();
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", checkSection);
  });

  return { currentSection, scrollToSection };
}
