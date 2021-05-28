<script>
export default {
  functional: true,
  props: {
    currentActive: {
      type: Boolean,
      require: true,
    },
  },
  render(h, context) {
    context.data.attrs = {
      width: "49px",
      height: "49px",
      fill: "none",
      viewBox: "0 0 49 49",
      xmlns: "http://www.w3.org/2000/svg",
    };
    return h("svg", context.data, [
      h(
        "path",
        {
          attrs: {
            d: "M24.1801 22.165C19.7287 22.165 16.1201 18.5564 16.1201 14.105C16.1201 9.65357 19.7287 6.04498 24.1801 6.04498C28.6315 6.04498 32.2401 9.65357 32.2401 14.105C32.2401 18.5564 28.6315 22.165 24.1801 22.165Z",
            fill: context.props.currentActive ? "#005B96" : "#B3B3B3",
          },
        },
        null
      ),
      h(
        "path",
        {
          attrs: {
            d: "M6.04624 40.7014C6.82726 31.0844 14.6327 26.195 24.1464 26.195C33.7939 26.195 41.7203 30.8158 42.3107 40.703C42.3343 41.0969 42.3107 42.315 40.797 42.315C33.3303 42.315 22.2349 42.315 7.51084 42.315C7.0055 42.315 6.00369 41.2252 6.04624 40.7014Z",
            fill: context.props.currentActive ? "#0DB2F2" : "#CCCCCC",
          },
        },
        null
      ),
    ]);
  },
};
</script>
