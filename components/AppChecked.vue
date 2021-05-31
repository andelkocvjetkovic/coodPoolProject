<script>
import CheckIcon from "~/assets/svg/CheckIcon.svg";
export default {
  functional: true,
  render(h, context) {
    var componentClass =
      " bg-teal-dark  w-[26px] h-[26px] rounded-full flex justify-center items-center lg:group-hover:bg-teal-light";
    if (context.data.staticClass == null) {
      context.data.staticClass = componentClass;
    } else {
      context.data.staticClass += componentClass;
    }

    return h("span", context.data, [h(CheckIcon)]);
  },
};
</script>
