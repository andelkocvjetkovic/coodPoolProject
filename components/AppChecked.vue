<script>
import CheckIcon from "~/assets/svg/CheckIcon.svg";
export default {
  functional: true,
  render(h, context) {
    var componentClass = " checked-icon";
    if (context.data.staticClass == null) {
      context.data.staticClass = componentClass;
    } else {
      context.data.staticClass += componentClass;
    }

    return h("span", context.data, [h(CheckIcon)]);
  },
};
</script>
<style lang="scss">
.checked-icon {
  transition: $transition-colors;
  transition-timing-function: $ease-in-out;
  background-color: $teal-dark;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
